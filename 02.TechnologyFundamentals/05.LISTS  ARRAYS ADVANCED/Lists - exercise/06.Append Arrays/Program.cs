

namespace _06.Append_Arrays
{
    using System;
    using System.Collections.Generic;
    using System.Linq;

   public class Program
    {
       public static void Main()
        {
            List<string> arraysBeforSeparate = Console.ReadLine()
                .Split('|')
                .ToList();

            arraysBeforSeparate.Reverse();

            List<int> result = new List<int>();

            for (int i = 0; i < arraysBeforSeparate.Count; i++)
            {
                string SeparatesArray = arraysBeforSeparate[i];

                List<int> numbers = SeparatesArray
                    .Split(' ', StringSplitOptions.RemoveEmptyEntries)
                    .Select(int.Parse)
                    .ToList();

                for (int j = 0; j < numbers.Count; j++)
                {
                    result.Add(numbers[j]);
                }
                

            }
            Console.WriteLine(string.Join(' ', result));

        }
    }
}
