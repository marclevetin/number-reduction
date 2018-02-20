# number-reduction
Given a number, write a program that prints out the minimum number of steps needed to reduce it to the number 1, using the operations "add 1", "subtract 1" and "divide by 2". Work with integers only; you should only divide even numbers by 2.
For example, given the input number 14, the quickest way to reduce it to 1 would be:

1. divide by 2 (7)
2. add 1       (8)
3. divide by 2 (4)
4. divide by 2 (2)
5. divide by 2 (1)

So given the input "14", your program would output "5". 

Your program should be able to satisfy the current test cases:
1. Input: 8, output: 3
2. Input: 19, output: 6
3. Input: 203, output: 11
4. Input: 987233, output: 25
5. Input: 9482379823740923741113, output: 92

## to use
1) Clone the repo
2) type `node index <number>`

Output will show `number of steps: <solution>` and an object with key: value pairs of the original number: steps to completion.
