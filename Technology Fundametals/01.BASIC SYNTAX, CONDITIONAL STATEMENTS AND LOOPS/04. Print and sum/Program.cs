using System;

namespace _04._Print_and_sum
{
    public class Program
    {
        public static void Main()
        {
            int StartNum = int.Parse(Console.ReadLine());
            int EndtNum = int.Parse(Console.ReadLine());

            int sum = 0;

            for (int i = StartNum; i <= EndtNum; i++)
            {
                Console.Write($"{i} ");
                sum += i;
            }
            Console.WriteLine();
            Console.WriteLine($"Sum: {sum}");


            

        }

    }
}
