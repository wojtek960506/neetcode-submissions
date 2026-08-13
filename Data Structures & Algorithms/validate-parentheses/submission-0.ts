class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s: string): boolean {

        const map = new Map<string, string>([
            ['(', ')'],
            ['{', '}'],
            ['[', ']']
        ]);

        const stack = [];

        const openingBrackets = ['(', '{', '['];
        const closingBrackets = [')', '}', ']'];

        for (let c of s) {
            if (openingBrackets.includes(c)) {
                stack.push(c);
            } else if (closingBrackets.includes(c)) {
                const curVal = stack.pop();

                if (map.get(curVal) !== c) {
                    // wrong closing bracket
                    return false;
                }
            } else {
                // we have some other character so wrong format of string,
                // but it will not happen due to requirements
                return false;
            }
        }

        // we might have unclosed brackets when string is traversed
        return stack.length === 0;
    }
}
