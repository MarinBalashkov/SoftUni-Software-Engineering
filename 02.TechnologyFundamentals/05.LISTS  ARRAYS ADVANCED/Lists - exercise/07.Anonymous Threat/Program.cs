

namespace _07.Anonymous_Threat
{
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Text;

   public class Program
    {
       public static void Main()
        {
            List<string> words = Console.ReadLine()
                .Split(' ')
                .ToList();

            while (true)
            {
                string input = Console.ReadLine();

                List<string> comands = input.Split(' ').ToList();

                if (comands[0] == "3:1")
                {
                    break;
                }

                if (comands[0] == "merge")
                {
                    int startIndex = int.Parse(comands[1]);
                    int endIndex = int.Parse(comands[2]);

                    if (startIndex < 0)
                    {
                        startIndex = 0;
                    }
                    if (startIndex > words.Count -1 ||endIndex <0)
                    {
                        continue;
                    }
                    if (endIndex > words.Count -1)
                    {
                        endIndex = words.Count -1;
                    }

                    StringBuilder sb = new StringBuilder();

                    for (int i = startIndex; i <= endIndex; i++)
                    {
                        string word = words[i];
                        sb.Append(word);

                    }
                    words.RemoveRange(startIndex, endIndex - startIndex + 1);
                    words.Insert(startIndex, sb.ToString());

                }

                if (comands[0] == "divide")
                {
                    int index = int.Parse(comands[1]);
                    int parts = int.Parse(comands[2]);

                    string element = words[index];

                    words.RemoveAt(index);

                    List<string> newWords = new List<string>();

                    int partLength = element.Length / parts;
                    int lastPartLength = partLength + element.Length % parts;

                    for (int i = 0; i < parts; i++)
                    {
                        string newWord = element.Substring(i * partLength, partLength);

                        if (i == parts - 1)
                        {
                            newWord = element.Substring(i * partLength, lastPartLength);
                        }

                        newWords.Add(newWord);
                    }

                    words.InsertRange(index, newWords);
                }
            }

            Console.WriteLine(string.Join(' ', words));
        }
    }
}
