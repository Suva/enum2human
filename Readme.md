[![Build Status](https://travis-ci.org/Suva/enum2human.svg?branch=master)](https://travis-ci.org/Suva/enum2human)
enum2human
==========

Simple Node.js/Javascript library to convert JAVA_STYLE enumerated codes to Human readable format. It just takes
the string and:

1. Lowercases all characters but first
2. Replaces underscores with spaces
3. Restores apostrophes before S

Needless to say this will mess with your data, so never use this library for anything other than display purposes.

Installation
------------

```shell
npm install enum2human
```

Usage
-----

```javascript
var e2h = require("enum2human");
var title = e2h("HOLY_COW_DO_UPPERCASE_CHARACTERS_RULE");
```

enum2human also provides method to recursively humanize entire objects:
```javascript
var humanObject = e2h.object(inhumanObject);
```

You can specify which fields to ignore in object conversion:
```javascript
e2h.ignoreField("securityCode")
var humanObject = e2h.object(inhumanObject);
```

You can specify which fields to ignore in object conversion:
```javascript
e2h.ignoreField("securityCode")
var humanObject = e2h.object(inhumanObject);
```

You can provide manual translation to some strings:
```javascript
e2h.translate("HIGH_BA", "Bachelor's degree");
var humanObject = e2h.object(inhumanObject);
```

This will return object where all the strings with only uppercase characters, numbers and underscores are humanized, but
rest of the content just copied.