

namespace _03.Treasure_Finder
{
    using System;
    using System.Collections.Generic;
    using System.Linq;

    public class Program
    {
        public static void Main()
        {
            List<int> key = Console.ReadLine()
                .Split()
                .Select(int.Parse)
                .ToList();

            

            while (true)
            {
                string inputLine = Console.ReadLine();

                if (inputLine == "find")
                {
                    break;
                }

                string result = string.Empty;


                for (int i = 0; i < inputLine.Length; i++)
                {
                    if (i == key.Count)
                    {
                        inputLine = inputLine.Remove(0, key.Count);
                        i = -1;
                        continue;

                    }

                    int currentChar = inputLine[i];
                    int decrease = key[i];

                    result += (char)(currentChar - decrease);

                    
                }

                int typeStartIndex = result.IndexOf('&') +1;
                int typeEndIndex = result.LastIndexOf('&');
                string type = result.Substring(typeStartIndex, typeEndIndex - typeStartIndex);

                int cordinateStarIndex = result.IndexOf('<') +1;
                int cordinateEndIndex = result.LastIndexOf('>');
                string cordinate = result.Substring(cordinateStarIndex, cordinateEndIndex - cordinateStarIndex);

                Console.WriteLine($"Found {type} at {cordinate}");
            }
        }
    }
}
