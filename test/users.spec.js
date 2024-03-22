const { expect } = require("chai")
const { describe } = require("mocha")
const supertest = require("supertest")
const app = require("../app")

const request = supertest(app)

describe("/users endpoint testing", () => {
    describe("GET /users", () => {
        it(`
        should return status: 200 |
        should return type: object |
        should return success: true |
        should return message: List of users |
        should return results type: object |`, async () => {
            const response = await request.get("/users")
            
            expect(response.status).to.equal(200)
            expect(typeof response.body).to.equal("object")
            expect(response.body.success).to.be.true
            expect(response.body.message).to.equal("List of users")
            expect(typeof response.body.results).to.equal("object")
        })
    })
    describe("GET /users/:id", () => {
        it(`
        should return status: 200 |
        should return success: true |
        should return message: Details users |
        should return results type: object |`, async () => {
            const response = await request.get("/users/1")

            expect(response.status).to.equal(200)
            expect(response.body.success).to.be.true
            expect(response.body.message).to.equal("Details users")
            expect(typeof response.body.results).to.equal("object")
        })
    })
})