/**
 * @license
 * Copyright 2013 Palantir Technologies, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Lint = require('tslint');
var ts = require('typescript');
var Rule = (function (_super) {
    __extends(Rule, _super);
    function Rule() {
        _super.apply(this, arguments);
    }
    /* tslint:enable:object-literal-sort-keys */
    Rule.prototype.apply = function (sourceFile) {
        return this.applyWithFunction(sourceFile, walk, this.getRuleOptions());
    };
    Rule.FAILURE_STRING_FACTORY = function (minLength) {
        return "minmum variable name length of " + minLength;
    };
    Rule.prototype.getRuleOptions = function () {
        var argument = this.ruleArguments[0];
        var options = { minLength: 0 };
        if (typeof argument === 'number') {
            options.minLength = argument;
        }
        options.minLength = Number(options.minLength); // user can pass a string instead of number
        return options;
    };
    /* tslint:disable:object-literal-sort-keys */
    Rule.metadata = {
        ruleName: 'variable-name-length',
        description: 'Requires variable names to have a certain length.',
        rationale: (_a = ["\n            Variable names should have a certain length, to keep the code readable and understandable"], _a.raw = ["\n            Variable names should have a certain length, to keep the code readable and understandable"], Lint.Utils.dedent(_a)),
        optionsDescription: (_b = ["\n        It can take one argument, which has to be the following:\n        * integer indicating minimum length of variable names."], _b.raw = ["\n        It can take one argument, which has to be the following:\n        * integer indicating minimum length of variable names."], Lint.Utils.dedent(_b)),
        options: {
            type: 'array',
            items: {
                oneOf: [
                    {
                        type: 'number'
                    },
                ]
            },
            minLength: 1,
            maxLength: 1
        },
        optionExamples: [[true, 3]],
        type: 'maintainability',
        typescriptOnly: false
    };
    return Rule;
    var _a, _b;
})(Lint.Rules.AbstractRule);
exports.Rule = Rule;
function walk(ctx) {
    var minLength = ctx.options.minLength;
    return ts.forEachChild(ctx.sourceFile, function cb(node) {
        switch (node.kind) {
            case ts.SyntaxKind.Parameter:
            case ts.SyntaxKind.PropertyDeclaration:
            case ts.SyntaxKind.VariableDeclaration: {
                var name_1 = node.name, as = ts.ParameterDeclaration | ts.PropertyDeclaration | ts.VariableDeclaration;
                if (name_1.kind === ts.SyntaxKind.Identifier) {
                    handleVariableNameFormat(name_1, minLength);
                }
            }
        }
        return ts.forEachChild(node, cb);
    });
    function handleVariableNameFormat(name, variableMinLength) {
        var text = name.text;
        if (text.length < variableMinLength) {
            ctx.addFailureAtNode(name, Rule.FAILURE_STRING_FACTORY(variableMinLength));
        }
    }
}
