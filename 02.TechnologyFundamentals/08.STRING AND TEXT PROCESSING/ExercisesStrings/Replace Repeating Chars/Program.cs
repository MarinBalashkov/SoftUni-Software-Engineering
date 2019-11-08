

namespace Replace_Repeating_Chars
{
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Text;

    public class Program
    {
        public static void Main()
        {
            string input = Console.ReadLine();
            
            StringBuilder sb = new StringBuilder();

            for (int i = 0; i < input.Length - 1; i++)
            {
                char previasChar = input[i];
                char currentChar = input[i + 1];
                if (previasChar != currentChar)
                {
                    sb.Append(previasChar);
                }
                if (i == input.Length - 2)
                {
                    sb.Append(currentChar);
                }
                

            }
            Console.WriteLine(sb);
        }
    }
}
