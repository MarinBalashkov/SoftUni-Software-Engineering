using System;
using System.Collections.Generic;
using System.Linq;

namespace ConsoleApp4
{
    public class Program
    {
        public static void Main()
        {
            var dic = new Dictionary<string, int>
            {
                ["Ivan"] = 6,
                ["Gosho"] = 5,
                ["Anna"] = 6,
                ["Kircho"] = 4
            };

            var result = dic
                .OrderBy(kvp => kvp.Value)
                .ThenBy(kvp => kvp.Key)
                .ToDictionary(
                kvp => kvp.Key, 
                kvp => kvp.Value);

            foreach (var kvp in result)
            {
                Console.WriteLine($"{kvp.Key} - {kvp.Value}");
            }
        }
    }
}
