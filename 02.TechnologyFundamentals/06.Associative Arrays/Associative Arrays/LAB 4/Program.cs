

namespace LAB_4
{
    using System;
    using System.Collections.Generic;
    using System.Linq;

    public class Program
    {
        public static void Main()
        {
            var numbedrs = Console.ReadLine()
                .Split(' ')
                .Select(int.Parse)
                .ToList();

            var result = numbedrs
                .OrderByDescending(x => x)
                .Take(3)
                .ToList();
            Console.WriteLine(string.Join(" ", result));
        }
    }
}
