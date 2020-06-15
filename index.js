/**
 * Copyright 2018 FLYACTS GmbH
 *
 * The MIT License (MIT)
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the “Software”), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
 * DEALINGS IN THE SOFTWARE.
 */

module.exports = {
    extends: "tslint-sonarts",
    "rulesDirectory": [
        "rules"
    ],
    // See https://palantir.github.io/tslint/rules/
    "rules": {
        "adjacent-overload-signatures": true,
        "prefer-for-of": true,
        "unified-signatures": true,
        "no-any": true,
        "label-position": true,
        "no-arg": true,
        "no-construct": true,
        "no-duplicate-variable": true,

        "no-invalid-this": true,
        "no-misused-new": true,
        "no-shadowed-variable": true,
        "no-string-throw": true,
        "no-unused-expression": true,
        "no-var-keyword": true,
        "triple-equals": [
            true,
            "allow-null-check",
            "allow-undefined-check"
        ],
        "eofline": true,
        "indent": [true, "spaces"],
        "no-default-export": true,
        "no-trailing-whitespace": true,
        "prefer-const": true,
        "trailing-comma": [
            true,
            {
                "multiline": "always",
                "singleline": "never"
            }
        ],
        "await-promise": true,
        "no-floating-promises": true,
        "no-void-expression": true,
        "arrow-return-shorthand": true,
        "class-name": true,
        "comment-format": [true, "check-space"],
        "file-header": [
                true,
                "@copyright FLYACTS GmbH 2020",
                "@copyright FLYACTS GmbH 2020"
        ],
        "no-consecutive-blank-lines": [true, 2],
        "no-unnecessary-callback-wrapper": true,
        "one-variable-per-declaration": [true, "ignore-for-loop"],
        "prefer-method-signature": true,
        "quotemark":[true, "single", "avoid-escape", "avoid-template"],
        "semicolon": [true, "always"],
        "space-before-function-paren": [true, {
            "anonymous": "never",
            "named": "never",
            "asyncArrow": "always",
            "method": "never",
            "constructor": "never"
        }],
        "variable-name": [
            true,
            "allow-leading-underscore",
            "ban-keywords",
            "check-format"
        ],
        "whitespace": [
            true,
            "check-branch",
            "check-decl",
            "check-separator",
            "check-type",
            "check-typecast",
            "check-preblock"
        ],
        "completed-docs": [
            true,
            "methods",
            "functions",
            "classes"
        ],
        "no-console": [
            true
        ],
        "no-debugger": [true],
        "no-submodule-imports": [
            true,
            "@angular",
            "zone.js",
            "rxjs",
            "lodash"
        ],
        "no-bitwise": [true],
        "no-dynamic-delete": [true],
        "no-empty": [true],
        "promise-function-async": [true],
        "no-for-in-array": [true],
        "no-use-before-declare": true,
        "strict-boolean-expressions": [false],
        "strict-type-predicates": [true],
        "no-duplicate-imports": [true],
        "align": [true],
        "array-type": [true, "array-simple"],
        "ordered-imports": [true, {
            "grouped-imports": true
        }],
        "member-access": [true, "check-accessor", "check-constructor", "check-parameter-property"],
        "member-ordering": [true, {
            "order": [
                "public-instance-field",
                "public-static-field",
                "protected-instance-field",
                "protected-static-field",
                "private-instance-field",
                "private-static-field",
                "public-constructor",
                "protected-constructor",
                "private-constructor",
                "public-instance-method",
                "public-static-method",
                "protected-instance-method",
                "protected-static-method",
                "private-instance-method",
                "private-static-method",
            ]
        }],
        "jsdoc-format": true,
        "no-unthrown-error": true,
        "no-identical-conditions": true,
        "no-all-duplicated-branches": true,
        "no-useless-increment": true,
        "no-case-with-or": true,
        "no-collection-size-mischeck": true,
        "no-ignored-initial-value": true,
        "no-identical-conditions": true,
        "no-element-overwrite": true,
        "no-ignored-return": true,
        "no-misspelled-operator": true,
        "no-self-assignment": true,
        "no-unthrown-error": true,
        "no-use-of-empty-return-value": true,
        "no-useless-intersection": true,
        "cognitive-complexity": [true, 15],
        "mccabe-complexity": true,
        "use-primitive-type": true,
        "no-dead-store": true,
        "no-gratuitous-expressions": true,
        "no-duplicate-string": true,
        "no-commented-code": true,
        "no-big-function": true,
        "no-hardcoded-credentials": true,
        "no-extra-semicolon": true,
        "use-type-alias": true,
        "prefer-immediate-return": true,
        "parameters-max-number": true,
        "no-useless-cast": true,
        "no-return-type-any": true,
        "no-non-null-assertion": true,
        "no-return-await": true,
        "prefer-object-spread": true,
        "newline-per-chained-call": false,
        "no-unnecessary-callback-wrapper": true,
        "curly": true,
        "no-unsafe-finally": true,
        "max-line-length": [true, 120],
        "encoding": true,
        "no-redundant-jsdoc": true,
    }
};
