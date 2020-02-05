using System;
using System.Collections.Generic;

namespace _01._1._Reverse_Strings
{
   public class Program
    {
       public static void Main()
        {
            string input = Console.ReadLine();

            Stack<char> reverseString = new Stack<char>();

            foreach (var symbol in input)
            {
                reverseString.Push(symbol);
            }

            while (reverseString.Count != 0)
            {
                Console.Write(reverseString.Pop());
            }
        }
    }
}
