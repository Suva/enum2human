var convert = require("./lib/convert");

function humanize(string) {
    return convert.convertEnum(string);
}

humanize.object = function (input) {
    if(input == null)
        return null;

    var output = (Array.isArray(input)) ? [] : {};

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
