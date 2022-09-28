const handleAPIError = require("~root/utils/handleAPIError");
const createReader = require("~root/actions/readers/createReader");

const postreader = async (req, res) => {
    const { name, email, password } = req.body;

  try {
    const { reader } = await createReader({ name, email, password });

    res.status(201).send({
        reader
    });
  } catch (err) {
    handleAPIError(res, err);
  }
};

module.exports = postreader;
