using System;
using System.Collections.Generic;
using System.Linq;

namespace _02.ic_Queue_Operations
{
    public class Program
    {
        public static void Main(string[] args)
        {
            List<int> list = Console.ReadLine()
                .Split()
                .Select(int.Parse)
                .ToList();

            int num1 = list[0];
            int num2 = list[1];
            int num3 = list[2];

            var source = new Queue<int>(Console.ReadLine().Split().Select(int.Parse).ToList());

            for (int index = 0; index < num2; ++index)
            {
                if (source.Any())
                {
                    source.Dequeue();
                }
            }

            if (source.Contains(num3))
            {
                Console.WriteLine("true");
            }
            else if (source.Any())
            {
                Console.WriteLine(source.Min());
            }
            else
            {
                Console.WriteLine(0);
            }
        }
    }
}

