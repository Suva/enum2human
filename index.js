var convert = require("./lib/convert");

function humanize(string) {
    return convert.convertEnum(string);
}

humanize.object = function (input) {
    var output = {}
    for(var key in input) {
        var value = input[key];
        if(typeof value == "string" && value.match(/^[A-Z0-9_]+$/)){
            value = humanize(value);
        }

        if(typeof value == "object"){
            value = this.object(value);
        }
        output[key] = value;
    }

    return output;
};

module.exports = humanize;
