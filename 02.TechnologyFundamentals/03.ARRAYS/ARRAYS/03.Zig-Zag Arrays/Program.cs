using System;
using System.Linq;

namespace _03.Zig_Zag_Arrays
{
    class Program
    {
        static void Main(string[] args)
        {
            int n = int.Parse(Console.ReadLine());

            int[] firstRow = new int[n];
            int[] secondRow = new int[n];

            for (int i = 1; i <=n; i++)
            {
                int[] numbers = Console.ReadLine()
                    .Split()
                    .Select(int.Parse)
                    .ToArray();

                if (i % 2 == 0)
                {
                    firstRow[i - 1] = numbers[1];
                    secondRow[i - 1] = numbers[0];
                }
                else
                {
                    firstRow[i - 1] = numbers[0];
                    secondRow[i - 1] = numbers[1];
                }
            }

            for (int i = 0; i < firstRow.Length; i++)
            {
                Console.Write($"{firstRow[i]} ");
            }

            Console.WriteLine();
            for (int i = 0; i < secondRow.Length; i++)
            {
                Console.Write($"{secondRow[i]} ");
            }


        }
    }
}
