const insertReader = require("./queries/insertReader");

const createReader = async ({ name, email, password }) => {
  const reader = await insertReader({ name, email, password });

  return { reader };
};

module.exports = createReader;
