const { spotifySecrets } = require("../config");
const { encrypt } = require("../encryption");
const api = require("../api").default;

const swap = async (req, res) => {
  try {
    const reqData = {
      grant_type: "authorization_code",
      redirect_uri: spotifySecrets.CLIENT_CALLBACK,
      code: req.body.code,
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

exports.default = swap;
