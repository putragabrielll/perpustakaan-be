const db = require('../lib/db.lib');


exports.getAllBooks = async () => {
    const query = `
    SELECT
    "b"."id",
    "sb"."name" AS "statusBook",
    "b"."title",
    "b"."code",
    "b"."author",
    "b"."stock",
    "b"."createdAt",
    "b"."updatedAt"
    FROM "books" "b"
    INNER JOIN "statusBooks" "sb" ON "b"."statusBooksId" = "sb"."id"
    WHERE "statusBooksId" = 1
    ORDER BY "id" ASC
    `;
    const { rows } = await db.query(query);
    return rows
}

exports.getBookById = async (id) => {
    const query = `SELECT * FROM "books" WHERE "id" = $1`;
    const { rows } = await db.query(query, [id]);
    return rows[0]
}