const { Router } = require("express");
const { findLongURL } = require("../services/url-service");
const route = Router();

route.get("/:code", async (req, res) => {
  const code = req.params.code;
  //TOOD: validate link must exist

  const url = await findLongURL(code);

  if (url) return res.redirect(url.link);
  else return res.redirect("htps://google.com");
});

module.exports = route;
