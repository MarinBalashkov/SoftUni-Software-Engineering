using System;
using System.Collections.Generic;
using System.Linq;

namespace _03._3._Simple_Calculator
{
    class Program
    {
        static void Main()
        {
            var input = Console.ReadLine().Split();

            Stack<string> expression = new Stack<string>(input.Reverse());
            int sum = int.Parse(expression.Pop());

            while (expression.Count != 0)
            {
                var currentChar = expression.Pop();
                if (currentChar == "+")
                {
                    var nextChar = expression.Pop();
                    sum += int.Parse(nextChar);
                }
                else if (currentChar == "-")
                {
                    var nextChar = expression.Pop();
                    sum -= int.Parse(nextChar);
                }
            }

            Console.WriteLine(sum);
        }
    }
}
