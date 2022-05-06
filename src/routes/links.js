const { Router } = require("express");
const {
  createCustomShortCode,
  createRandomShortCode,
  findLongURL,
} = require("../services/url-service");

const route = Router();

/**
 * POST /api/links
 * BODY
 *      link: http://xxxx.xxxxx/xxx/xxxx
 *      -- optional --
 *      code: xxxx
 */
route.post("/", async (req, res) => {
  const link = req.body.link;
  const code = req.body.code;
  //TOOD: validate link must exist

  if (!code) {
    const url = await createRandomShortCode(link);
    return res.json(url);
  }
  try {
    const url = await createCustomShortCode(code, link);
    return res.json(url);
  } catch (e) {
    return res.status(400).json({ error: e.message });
  }
});

/**
 * GET /api/links/xxxx
 * RESPONSE
 *         link:
 *
 */
route.get("/:code", async (req, res) => {
  const code = req.params.code;
  //TOOD: validate link must exist

  const url = await findLongURL(code);

  if (url) return res.json(url);
  else return res.status(404).json({ error: "No such shortcode created" });
});
module.exports = route;
