using System;
using System.Linq;

namespace _08.Magic_Sum
{
    public class Program
    {
        public static void Main()
        {
            int[] numbers = Console.ReadLine().Split().Select(int.Parse).ToArray();

            int sum = int.Parse(Console.ReadLine());

            for (int i = 0; i < numbers.Length; i++)
            {
                int firstNumber = numbers[i];

                for (int j = i +1; j < numbers.Length; j++)
                {
                    int secondNumber = numbers[j];

                    if ((firstNumber +secondNumber) == sum)
                    {
                        Console.WriteLine($"{firstNumber} {secondNumber}");
                    }
                }

            }

        }
    }
}
