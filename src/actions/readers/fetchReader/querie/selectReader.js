const { submitQuery, camelKeys, getFirst } = require("~root/lib/database");

const selectReader = ({ email, password }) => submitQuery`
    SELECT 
        reader_id,
        reader_name,
        reader_email,
        reader_password
    FROM readers
    LEFT JOIN reader_types ON readers.reader_type_id = reader_types.reader_type_id
    WHERE email = ${email}
    AND password = SHA2(CONCAT(${password}, ${process.env.PASSWORD_SALT}), 224);
`;

module.exports = getFirst(camelKeys(selectReader));
