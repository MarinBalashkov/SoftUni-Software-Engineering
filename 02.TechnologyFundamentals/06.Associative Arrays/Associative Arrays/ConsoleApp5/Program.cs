using System;
using System.Collections.Generic;
using System.Linq;

namespace ConsoleApp5
{
    public class Program
    {
        public static void Main()
        {
            var list = Console.ReadLine()
                .Split(' ')
                .Select(int.Parse)
                .OrderByDescending(x => x)
                .Take(3)
                .ToList();
            Console.WriteLine(string.Join(" ", list ));
                

                
        }
    }
}
