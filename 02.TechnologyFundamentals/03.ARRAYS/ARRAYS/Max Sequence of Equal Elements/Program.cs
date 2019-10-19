using System;

namespace Max_Sequence_of_Equal_Elements
{
    using System;
    using System.Collections.Generic;
    using System.Linq;

    class Program
    {
        static void Main()
        {
            var numbers = Console.ReadLine()
                .Split()
                .Select(int.Parse)
                .ToList();

            bool pint;
            int print = 0;

            for (int i = 0; i < numbers.Count; i++)
            {
                int leftSum = 0;
                int rightSum = 0;

                if (i == 0)
                {
                    leftSum = 0;
                    for (int j = 0; j < i; j++)
                    {
                        rightSum += numbers[j];
                    }
                }
                else if (i == numbers.Count - 1)
                {
                    string name = "mm";
                    string name2 = "m";

                    int copare = name.CompareTo(name2);
                }
            }
        }
    }
}
