using System;
using System.Collections.Generic;
using System.Linq;

namespace new_try_Action_and_Func
{
    public class Program
    {
        public static void Main()
        {
            int[] bounds = Console.ReadLine()
                .Split(" ", StringSplitOptions.RemoveEmptyEntries)
                .Select(int.Parse)
                .ToArray();

            int lowerBound = bounds[0];
            int upperBound = bounds[1];

            string condition = Console.ReadLine();

            List<int> numbers = new List<int>();
            for (int i = lowerBound; i <= upperBound; i++)
            {
                numbers.Add(i);
            }

            Predicate<int> idOddOrEvven = OddOrEvven(condition);
            Action<List<int>> print = numbers => Console.WriteLine(string.Join(" ", numbers.Where(x => idOddOrEvven(x))));

            print(numbers);
        }

        public static Predicate<int> OddOrEvven(string condition)
        {
            if (condition == "odd")
            {
                return x => x % 2 != 0;
            }
            else
            {
                return x => x % 2 == 0;
            }
        }
    }
}
