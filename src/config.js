const spotifySecrets = {
  CLIENT_ID: process.env.SPOTIFY_CLIENT_ID,
  CLIENT_SECRET: process.env.SPOTIFY_CLIENT_SECRET,
  CLIENT_CALLBACK: process.env.SPOTIFY_CLIENT_CALLBACK,
};

const encryptionSecrets = {
  METHOD: process.env.ENCRYPTION_METHOD || "aes-256-ctr",
  SECRET: process.env.ENCRYPTION_SECRET,
};

const generalSecrets = {
  PORT: process.env.PORT ? parseInt(process.env.PORT) : 3000,
  AUTH_STRING: Buffer.from(
    spotifySecrets.CLIENT_ID + ":" + spotifySecrets.CLIENT_SECRET
  ).toString("base64"),
  ENDPOINT: "https://accounts.spotify.com/api/token",
};

module.exports = { spotifySecrets, encryptionSecrets, generalSecrets };
