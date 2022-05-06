const { URLs } = require("../models/db");
const { int2radix64, radix64toint } = require("./radix64-service");

async function createRandomShortCode(link) {
  const genCode = parseInt(Math.random() * 999999999999);

  const exists = await URLs.findOne({
    where: {
      id: genCode,
    },
  });

  if (exists) {
    //FIX: possible race condition if multiple servers vs 1 db
    return await createRandomShortCode(link);
  }
  return await URLs.create({
    id: genCode,
    code: int2radix64(genCode),
    link: link,
  });
}

async function createCustomShortCode(code, link) {
  const id = radix64toint(code);
  const exists = await URLs.findOne({
    where: {
      id: id,
    },
  });
  if (exists) {
    return new Error("This shortcode [" + code + "] already exists");
  }

  return await URLs.create({
    id: id,
    code: code,
    link: link,
  });
}

async function findLongURL(code) {
  const id = radix64toint(code);
  return await URLs.findOne({
    where: {
      id: id,
    },
  });
}

module.exports = {
  createCustomShortCode,
  createRandomShortCode,
  findLongURL,
};
