using System;
using System.Collections.Generic;
using System.Linq;

namespace new_try
{
    public class Program
    {
        public static void Main()
        {
            var n = int.Parse(Console.ReadLine());
            var lines = new List<string>();

            for (int i = 0; i < n; i++)
            {
                lines.Add(Console.ReadLine());
            }

            var indexes = Console.ReadLine().Split().Select(int.Parse).ToArray();
            var index1 = indexes[0];
            var index2 = indexes[1];


            Swap<string>(lines, index1, index2);
            Console.WriteLine(string.Join(Environment.NewLine, lines.Select(x => $"{x.GetType().ToString()}: {x.ToString()}")));
        }

        public static void Swap<T>(List<T> list, int firstIndex, int secondIndex)
        {
            T tempElement = list[firstIndex];
            list[firstIndex] = list[secondIndex];
            list[secondIndex] = tempElement;

            //list.Select(x => $"{x.GetType().ToString()}: {x.ToString()}");
        }

    }
}
