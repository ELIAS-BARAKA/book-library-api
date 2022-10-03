const { submitQuery, camelKeys, getFirst } = require("~root/lib/database");

const selectReader = ({ email }) => submitQuery`
    SELECT 
        reader_id,
        reader_name,
        reader_email
    FROM readers
    LEFT JOIN reader_types ON readers.reader_type_id = reader_types.reader_type_id
    WHERE email = ${email};
`;

module.exports = getFirst(camelKeys(selectReader));
