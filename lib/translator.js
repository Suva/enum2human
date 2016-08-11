var translations = [];

function addTranslation(from, to) {
    translations[from] = to;
}

function translate(string) {
    return translations[string]
}

module.exports = {
    add: addTranslation,
    translate: translate
}