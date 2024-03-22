const db = require('../lib/db.lib');


exports.getAllUsers = async () => {
    const query = `
    SELECT
    "u"."id",
    "su"."name" AS "statusUser",
    "u"."name",
    "u"."code",
    (SELECT count("id") FROM "pinjam" WHERE "usersId" = "u"."id") AS "totalPinjam",
    "u"."createdAt",
    "u"."updatedAt"
    FROM "users" "u"
    INNER JOIN "statusUsers" "su" ON "u"."statusUsersId" = "su"."id"
    GROUP BY "u"."id", "su"."name"
    ORDER BY "id" ASC`;
    const { rows } = await db.query(query);
    return rows
}

exports.getUserById = async (id) => {
    const query = `
    SELECT
    "u"."id",
    "su"."name" AS "statusUser",
    "u"."name",
    "u"."code",
    array_agg("b"."title") AS "books",
    (SELECT count("id") FROM "pinjam" WHERE "usersId" = $1) AS "totalPinjam",
    "u"."createdAt",
    "u"."updatedAt"
    FROM "users" "u"
    INNER JOIN "statusUsers" "su" ON "u"."statusUsersId" = "su"."id"
    LEFT JOIN "pinjam" "p" ON "u"."id" = "p"."usersId"
    LEFT JOIN "books" "b" ON "p"."booksId" = "b"."id"
    WHERE "u"."id" = $1
    GROUP BY "u"."id", "su"."name"
    `;
    const { rows } = await db.query(query, [id]);
    return rows[0]
}


// =============================================================
// ORDER
exports.getUserCode = async (code) => {
    const query = `
    SELECT *
    FROM "users"
    WHERE "code" = $1
    `
    const { rows } = await db.query(query, [code])
    return rows[0]
}

// UPDATE STATUS USER JIKA TGL KEMBALI > 7 HARI
exports.updateUserStatus = async (id) => {
    const query = `
    UPDATE "users"
    SET "statusUsersId" = 2, "updatedAt" = now()
    WHERE "id" = $1
    RETURNING *
    `;
    const { rows } = await db.query(query, [id]);
    return rows[0]
}