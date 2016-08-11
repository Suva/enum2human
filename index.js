var convert = require("./lib/convert");
var ignoredFields = [];

function ignored(value) {
    return (ignoredFields.indexOf(value) >= 0);
}

function humanize(string) {
    return convert.convertEnum(string);
}

humanize.object = function (input) {
    if(input == null)
        return null;

    var output = (Array.isArray(input)) ? [] : {};

    for(var key in input) {
        var value = input[key];
        if(!ignored(key)){
            if(typeof value == "string" && value.match(/^[A-Z0-9_]+$/)){
                value = this(value);
            }

            if(typeof value == "object"){
                value = this.object(value);
            }
        }
        output[key] = value;
    }

    return output;
};

humanize.ignoreField = function (field) {
   if(ignoredFields.indexOf(field) < 0){
       ignoredFields.push(field);
   }
};

module.exports = humanize;
