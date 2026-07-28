class Solution:
    def evalRPN(self, tokens: List[str]) -> int:

        l = len(tokens)

        if l == 0:
            return 0

        if l == 1 or l == 2:
            return int(tokens[0])

        stack = deque()

        for token in tokens:

            if token == '+':
                num2 = int(stack.pop())
                num1 = int(stack.pop())
                stack.append(num1 + num2)
            elif token == '-':
                num2 = int(stack.pop())
                num1 = int(stack.pop())
                stack.append(num1 - num2)
            elif token == '*':
                num2 = int(stack.pop())
                num1 = int(stack.pop())
                stack.append(num1 * num2)
            elif token == '/':
                num2 = int(stack.pop())
                num1 = int(stack.pop())
                stack.append(int(num1 / num2))
            else:
                stack.append(token)

        return stack.pop()
