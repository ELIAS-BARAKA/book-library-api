const { submitQuery, camelKeys} = require("~root/lib/database");

const insertReader = ({ name, email, password }) => submitQuery`
  INSERT INTO readers
  (
    reader_name,
    reader_email,
    reader_password,
  )
  VALUES
  (
    ${name},
    ${email},
    ${password},
  )
`;

module.exports = camelKeys(insertReader);
