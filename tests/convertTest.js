var expect = require("chai").expect;
var convert = require("../lib/convert");

describe("string converter", function () {
    it("should uncapitalize string", function () {
        expect(convert.convertEnum("ICEFIRE")).to.equal("Icefire");
    });

    it("should replace underscores with spaces", function () {
        expect(convert.convertEnum("SPACES_ARE_DANGEROUS")).to.equal("Spaces are dangerous");
    });

    it("should restore apostrophes when replaced by underscores", function () {
        expect(convert.convertEnum("IT_S_DANGEROUS_TO_BEFRIEND_APOSTROPHES")).to.equal("It's dangerous to befriend apostrophes");
        expect(convert.convertEnum("JOE_S")).to.equal("Joe's");
    })
});