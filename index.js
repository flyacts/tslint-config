/**
 * Copyright 2017 FLYACTS GmbH
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
    // See https://palantir.github.io/tslint/rules/
    "rules": {
        // These rules find errors related to TypeScript features.
        "adjacent-overload-signatures": true,
        "prefer-for-of": true,
        "unified-signatures": true,
        "no-any": true,

        // These rules catch common errors in JS programming or otherwise
        // confusing constructs that are prone to producing bugs.

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
        "typeof-compare": true,

        // These rules make code maintenance easier
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


        // These rules catch common errors in JS programming or otherwise
        // confusing constructs that are prone to producing bugs.

        "await-promise": true,
        "no-floating-promises": true,
        "no-void-expression": true,

        // These rules enforce consistent style across your codebase:
        "arrow-return-shorthand": [true],
        "class-name": true,
        "comment-format": [true, "check-space"],
        "file-header": [true, "@copyright FLYACTS GmbH 2017"],
        "no-consecutive-blank-lines": [true, 2],
        "no-unnecessary-callback-wrapper": true,
        "one-variable-per-declaration": [true, "ignore-for-loop"],
        "prefer-method-signature": true,
        "quotemark": {
            "serverity": "error",
            "options": [
                "single"
            ]
        },
        "semicolon": [true, "always"],
        "space-before-function-paren": [true, {
            "anonymous": "never",
            "named": "never",
            "asyncArrow": "always",
            "method": "never",
            "constructor": "never"
        }],
        "variable-name": [true, "allow-leading-underscore", "ban-keywords", "check-format"],
        "whitespace": [
            true,
            "check-branch",
            "check-decl",
            "check-separator",
            "check-type",
            "check-typecast",
            "check-preblock"
        ]
    }
};
