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
    (SELECT count("id") FROM "pinjam" WHERE "usersId" = $1) AS "totalPinjam",
    "u"."createdAt",
    "u"."updatedAt"
    FROM "users" "u"
    INNER JOIN "statusUsers" "su" ON "u"."statusUsersId" = "su"."id"
    WHERE "u"."id" = $1
    GROUP BY "u"."id", "su"."name"
    `;
    const { rows } = await db.query(query, [id]);
    return rows[0]
}