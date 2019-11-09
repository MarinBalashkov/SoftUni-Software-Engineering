
namespace Repeat_Strings
{
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Text;

    public class Program
    {
        public static void Main()
        {
            List<string> list = Console.ReadLine().Split().ToList();

            StringBuilder result = new StringBuilder();

            for (int i = 0; i < list.Count; i++)
            {
                string word = list[i];
                for (int j = 0; j < word.Length; j++)
                {
                    result.Append(word);
                }
            }

            Console.WriteLine(result);
        }
    }
}
