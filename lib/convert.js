module.exports = {
    convertEnum: convertEnum
}

function convertEnum(input) {
    var result = input
        .toLowerCase()
        .replace(/_/g, " ")
        .replace(/(\w) s$/, "$1's")
        .replace(/(\w) s /, "$1's ")

    return upperCaseFirst(result);
}

function upperCaseFirst(input) {
    return input[0].toUpperCase() + input.slice(1);
}