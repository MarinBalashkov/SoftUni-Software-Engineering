

namespace Equal_Sums
{
    using System;
    using System.Collections.Generic;
    using System.Linq;

   public class Program
    {
       public static void Main()
        {
            List<int> numbers = Console.ReadLine()
                .Split(' ')
                .Select(int.Parse)
                .ToList();

            bool pint = false;
            int print = 0;

            for (int i = 0; i < numbers.Count; i++)
            {
                int leftSum = 0;
                int rightSum = 0;

                if (i == 0)
                {
                    leftSum = 0;
                    for (int j = i +1; j < numbers.Count; j++)
                    {
                        rightSum += numbers[j];
                    }

                }
                else if (i == numbers.Count - 1)
                {
                    rightSum = 0;
                    for (int j = 0; j < i; j++)
                    {
                        leftSum += numbers[j];
                    }
                }
                else
                {
                    for (int j = 0; j < i; j++)
                    {
                        leftSum += numbers[j];
                    }
                    for (int j = i + 1; j < numbers.Count; j++)
                    {
                        rightSum += numbers[j];
                    }

                }
                if (leftSum == rightSum)
                {
                    print = i;
                    pint = true;
                }   
            }


            if (pint == true)
            {
                Console.WriteLine(print);
            }
            else
            {
                Console.WriteLine("no");
            }
        }
    }
}
