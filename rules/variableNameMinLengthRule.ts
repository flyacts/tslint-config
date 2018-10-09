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

import * as Lint from 'tslint';
import * as ts from 'typescript';

interface MaxLineLengthRuleOptions {
    minLength: number;
}

export class Rule extends Lint.Rules.AbstractRule {
    /* tslint:disable:object-literal-sort-keys */
    public static metadata: Lint.IRuleMetadata = {
        ruleName: 'variable-name-min-length',
        description: 'Requires variable names to have a certain length.',
        rationale: Lint.Utils.dedent`
            Variable names should have a certain length, to keep the code readable and understandable`,
        optionsDescription: Lint.Utils.dedent`
        It can take one argument, which has to be the following:
        * integer indicating minimum length of variable names.`,
        options: {
            type: 'array',
            items: {
                oneOf: [
                    {
                        type: 'number',
                    },
                ],
            },
            minLength: 1,
            maxLength: 1,
        },
        optionExamples: [[true, 3]],
        type: 'maintainability',
        typescriptOnly: false,
    };
    /* tslint:enable:object-literal-sort-keys */

    public apply(sourceFile: ts.SourceFile): Lint.RuleFailure[] {
        return this.applyWithFunction(sourceFile, walk, this.getRuleOptions());
    }

    public static FAILURE_STRING_FACTORY(minLength: number) {
        return `minimum variable name length of ${minLength}`;
    }


    private getRuleOptions(): MaxLineLengthRuleOptions {
        const argument = this.ruleArguments[0];
        const options: MaxLineLengthRuleOptions = { minLength: 0 };
        if (typeof argument === 'number') {
            options.minLength = argument;
        }
        options.minLength = Number(options.minLength); // user can pass a string instead of number
        return options;
    }
}

function walk(ctx: Lint.WalkContext<MaxLineLengthRuleOptions>) {
    const minLength = ctx.options.minLength;
    return ts.forEachChild(ctx.sourceFile, function cb(node: ts.Node): void {
        switch (node.kind) {
            case ts.SyntaxKind.Parameter:
            case ts.SyntaxKind.PropertyDeclaration:
            case ts.SyntaxKind.VariableDeclaration: {
                const { name } = node as ts.ParameterDeclaration | ts.PropertyDeclaration | ts.VariableDeclaration;
                if (name.kind === ts.SyntaxKind.Identifier) {
                    handleVariableNameFormat(name, minLength);
                }
            }
        }

        return ts.forEachChild(node, cb);
    });

    function handleVariableNameFormat(name: ts.Identifier, variableMinLength: number): void {
        const { text } = name;

        if (text.length < variableMinLength ) {
            ctx.addFailureAtNode(name, Rule.FAILURE_STRING_FACTORY(variableMinLength));
        }
    }
}
