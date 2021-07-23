const config = {
    "ownerID": ["352036341153923072"], //kendi IDınızı yazınız
    "admins": ["352036341153923072"],
    "support": ["352036341153923072"],
    "token": "ODQwNTk5MDE4ODU3MDM3ODI1.YJai1w.zO9Qy6ENMrvt7exgKy7Jd8AC0pc", //botunuzun tokenini yazınız
    "dashboard" : {
      "oauthSecret": "K_Exy1StUhpg8eT2IS0uPbJKMMZGHraH", //botunuzun secretini yazınız
      "callbackURL": `https://eskisitetax.glitch.me/callback`, //site URLnizi yazınız /callback kısmını silmeyiniz!
      "sessionSecret": "super-secret-session-thing", //kalsın
      "domain": "https://eskisitetax.glitch.me/", //site URLnizi yazınız!
          "port": process.env.PORT
    }
  };
  
  module.exports = config;