const { submitQuery, getInsertId } = require("~root/lib/database");

const insertReader = ({ name, email }) => submitQuery`
  INSERT INTO readers( reader_name, reader_email ) VALUES ( ${name}, ${email})`;

module.exports = getInsertId(insertReader);
