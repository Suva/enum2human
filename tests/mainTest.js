const expect = require("chai").expect;
const e2h = require("../index");

describe("main api", function () {
    it("Should return the humanizer method", function () {
        expect(e2h).to.be.a("function");
        expect(e2h("SINGLE_POINT_OF_FAILURE")).to.equal("Single point of failure");
    });

    describe("object method", function () {
        it("should humanize all elements in object that look like they need it :)", function () {
            const source = {
                "name": "Jack",
                "job": "programmer",
                "gender": "MALE",
                "code": "CIE-F512",
                "address": {
                    "city": "LONDON",
                    "street": "Depression st."
                }
            };

            const expected = {
                "name": "Jack",
                "job": "programmer",
                "gender": "Male",
                "code": "CIE-F512",
                "address": {
                    "city": "London",
                    "street": "Depression st."
                }
            };

            expect(e2h.object(source)).to.deep.equal(expected);
        })
    });
});