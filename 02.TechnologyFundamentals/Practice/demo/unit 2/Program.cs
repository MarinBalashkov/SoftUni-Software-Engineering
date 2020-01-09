using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.RegularExpressions;

namespace unit_2
{
    public class Program
    {
        public static void Main()
        {
            string firtstLine = Console.ReadLine();
            List<string> secondLine = Console.ReadLine()
                .Split(' ')
                .ToList();

          
            StringBuilder sb = new StringBuilder();

            for (int i = 0; i < firtstLine.Length; i++)
            {
                char currentChar = firtstLine[i];
                if ((currentChar >= 'd' && currentChar <= 'z') || 
                    currentChar == '{' || currentChar == '}' || 
                    currentChar == '|' || currentChar == '#')
                {
                    int thriCharsPrevias = (int)currentChar - 3;
                    sb.Append((char)thriCharsPrevias);

                }
                else
                {
                    Console.WriteLine("This is not the book you are looking for.");
                    return;
                }           
            }
            string text = sb.ToString();

            string replaced = secondLine[0];
            string replacemant = secondLine[1];

            text = text.Replace(replaced, replacemant);
            Console.WriteLine(text);
            

        }
    }
}
