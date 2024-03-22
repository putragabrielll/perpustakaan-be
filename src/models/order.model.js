const db = require('../lib/db.lib');


// BUKU PINJAM
exports.addOrder = async (usersId, booksId) => {
    const query = `
    INSERT INTO "pinjam"
    ("usersId", "booksId")
    VALUES
    ($1, $2)
    RETURNING *
    `;
    const { rows } = await db.query(query, [usersId, booksId]);
    return rows
}

exports.updateStock = async (id) => {
    const query = `
    UPDATE "books"
    SET "stock" = 0, "statusBooksId" = 2
    WHERE "id" = $1
    `;
    const { rows } = await db.query(query, [id]);
    return rows
}


// BUKU KEMBALI
exports.updateKembali = async (usersId, booksId) => {
    const query = `
    UPDATE "pinjam"
    SET "updatedAt" = now()
    WHERE "usersId" = $1 AND "booksId" = $2
    RETURNING *
    `;
    const { rows } = await db.query(query, [usersId, booksId]);
    return rows[0]
}


// DELETE ORDER
exports.deleteOrder = async (usersId, booksId) => {
    const query = `
    DELETE FROM "pinjam"
    WHERE "usersId" = $1 AND "booksId" = $2
    RETURNING *
    `;
    const { rows } = await db.query(query, [usersId, booksId]);
    return rows[0]
}