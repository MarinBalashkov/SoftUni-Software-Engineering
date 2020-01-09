using System;
using System.Collections.Generic;
using System.Linq;


namespace demo
{
    public class Program
    {
        public static void Main()
        {


            List<string> FirstInput = Console.ReadLine()
                .Split(" | ")
                .ToList();

            var dictionary = new Dictionary<string, List<string>>();


            for (int i = 0; i < FirstInput.Count; i++)
            {
                string currentString = FirstInput[i];
                List<string> wordsDefinition = currentString
                    .Split(": ")
                    .ToList();
                string word = wordsDefinition[0];
                string definition = wordsDefinition[1];

                if (!dictionary.ContainsKey(word))
                {
                    dictionary[word] = new List<string>();
                    dictionary[word].Add(definition);
                }
                else
                {
                    dictionary[word].Add(definition);
                }
            }

            List<string> secondInput = Console.ReadLine()
                .Split(" | ")
                .ToList();

            for (int i = 0; i < secondInput.Count; i++)
            {
                string wordToCopair = secondInput[i];
          
                    foreach (var kvp in dictionary)
                    {
                    if (wordToCopair == kvp.Key)
                    {
                        Console.WriteLine($"{kvp.Key}");
                        foreach (var def in kvp.Value.OrderByDescending(x => x.Length))
                        {
                            Console.WriteLine($" -{def}");
                        }

                    }
                       
                    }
                
            }

            string thirdInput = Console.ReadLine();

            if (thirdInput == "End")
            {
                return;
            }
            else if (thirdInput == "List")
            {
                var thirdPrint = dictionary
                    .OrderBy(x => x.Key)
                    .ToDictionary(x => x.Key, x => x.Value);

                Console.WriteLine(string.Join(" ", thirdPrint.Keys));
            }
        }
    }
}
