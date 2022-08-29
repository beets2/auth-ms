const { encrypt, decrypt } = require("../encryption");
const api = require("../api").default;

const refresh = async (req, res) => {
  try {
    if (!req.body.refresh_token) {
      res.status(400).json({ error: "Refresh token is missing from body" });
      return;
    }

    const refreshToken = decrypt(req.body.refresh_token);

    const reqData = {
      grant_type: "refresh_token",
      refresh_token: refreshToken,
    };

    const response = await api.post("/", reqData);

    if (response?.data?.refresh_token) {
      response.data.refresh_token = encrypt(response.data.refresh_token);
    }

    res.send(response);
  } catch (error) {
    res.send(error);
  }
};

exports.default = refresh;
