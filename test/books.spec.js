const { expect } = require("chai")
const { describe } = require("mocha")
const supertest = require("supertest")
const app = require("../app")

const request = supertest(app)

describe("/books endpoint testing", () => {
    describe("GET /books", () => {
        it(`
        should return status: 200 |
        should return type: object |
        should return success: true |
        should return message: List of books |
        should return results type: object |`, async () => {
            const response = await request.get("/books")

            expect(response.status).to.equal(200)
            expect(typeof response.body).to.equal("object")
            expect(response.body.success).to.be.true
            expect(response.body.message).to.equal("List of books")
            expect(typeof response.body.results).to.equal("object")
        })
    })
    describe("GET /books/:id", () => {
        it(`
        should return status: 200 |
        should return success: true |
        should return message: Details books |
        should return results type: object |`, async () => {
            const response = await request.get("/books/1")

            expect(response.status).to.equal(200)
            expect(response.body.success).to.be.true
            expect(response.body.message).to.equal("Details book")
            expect(typeof response.body.results).to.equal("object")
        })
    })
})