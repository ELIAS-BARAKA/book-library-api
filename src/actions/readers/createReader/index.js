const insertReader = require("./queries/insertReader");

const createReader = async ({ name, email }) => {
  const reader = await insertReader({ name, email });

  return { reader };
};

module.exports = createReader;
