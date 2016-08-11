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
                    "street": "Depression st.",
                    "nullValue": null
                }
            };

            const expected = {
                "name": "Jack",
                "job": "programmer",
                "gender": "Male",
                "code": "CIE-F512",
                "address": {
                    "city": "London",
                    "street": "Depression st.",
                    "nullValue": null
                }
            };

            expect(e2h.object(source)).to.deep.equal(expected);
        })
    });
    describe("ignoreField method", function () {
        it("should ignore fields in object which are specified", function () {
            var obj = {
                notIgnored: "SHOULD_TRANSFORM",
                reallyBold: "SHOULD_STAY"
            };

            var expected = {
                notIgnored: "Should transform",
                reallyBold: "SHOULD_STAY"
            };

            e2h.ignoreField("reallyBold");
            expect(e2h.object(obj)).to.deep.equal(expected);
        })
    })

    describe("translations method", function () {
        it("should tramslate fields as specified", function () {
            var obj = {
                education: "HIGH_BA",
                gender: "FEMALE"
            };

            var expected = {
                education: "Bachelor's degree",
                gender: "Female"
            };

            e2h.translate("HIGH_BA", "Bachelor's degree");
            expect(e2h.object(obj)).to.deep.equal(expected);
        })
    })
});