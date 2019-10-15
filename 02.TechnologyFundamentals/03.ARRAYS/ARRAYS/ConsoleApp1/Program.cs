using System;
using System.Linq;

namespace ConsoleApp1
{
    class Program
    {
        static void Main(string[] args)
        {
            int[] numbers = Console.ReadLine()
                .Split()
                .Select(int.Parse)
                .ToArray();


                int leftsum = 0;
                int rightsum = 0;

            for (int i = 0; i < numbers.Length; i++)
            {
                int numOne = numbers[i];
                

        
                for (int j = i+1; j < numbers.Length; j++)
                {
                    int second = numbers[j];
                    rightsum += second;
                }
            }
        }
    }
}
