namespace _01._Basic_Stack_Operations
{
    using System;
    using System.Collections.Generic;
    using System.Linq;

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

            Stack<int> source = new Stack<int>(Console.ReadLine().Split().Select(int.Parse).ToList());

            for (int index = 0; index < num2; ++index)
            {
                source.Pop();
            }

            if (source.Contains(num3))
            {
                Console.WriteLine("true");
            }
            else
            {
                Console.WriteLine(source.Min());
            }
        }
    }
}
