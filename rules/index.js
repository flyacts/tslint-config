"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
var variableNameLengthRule_1 = require("./variableNameLengthRule");
exports.VariableNameLengthRule = variableNameLengthRule_1.Rule;
__export(require("./angular/config"));
exports.rulesDirectory = '.';
