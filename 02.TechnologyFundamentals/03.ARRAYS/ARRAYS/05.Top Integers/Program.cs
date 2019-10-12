

namespace _05.Top_Integers
{
    using System;
    using System.Linq;
    using System.Collections.Generic;

    public class Program
    {
       public static void Main()
        {
            
            
            int[] numbers = Console.ReadLine()
                .Split()
                .Select(int.Parse)
                .ToArray();

            for (int i = 0; i < numbers.Length; i++)

            {
                int num1 = numbers[i];

                for (int j = i +1; j < numbers.Length; j++)
                {
                    int num2 = numbers[j];


                    if (num1 <= num2)
                    {
                        break;
                    }
                    else if (j == numbers.Length -1)
                    {
                        Console.Write(num1 + " ");
                    }
                }

            }
            Console.Write(numbers[numbers.Length -1]);




        }
    }
}
