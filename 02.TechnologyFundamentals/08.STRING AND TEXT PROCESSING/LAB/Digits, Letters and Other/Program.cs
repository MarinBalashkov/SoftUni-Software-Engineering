

namespace Digits__Letters_and_Other
{
    using System;
    using System.Collections.Generic;
    using System.Linq;
    public class Program
    {
        public static void Main()
        {
            string input = Console.ReadLine();

            string digits = null;
            string letters = null;
            string other = null;

            for (int i = 0; i < input.Length; i++)
            {
                char currentChar = input[i];

                if (char.IsDigit(currentChar))
                {
                    digits += currentChar;
                }
                else if (char.IsLetter(currentChar))
                {
                    letters += currentChar;
                }
                else
                {
                    other += currentChar;
                }
            }

            Console.WriteLine(digits);
            Console.WriteLine(letters);
            Console.WriteLine(other);
        }
    }
}
