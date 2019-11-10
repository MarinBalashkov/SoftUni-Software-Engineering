

namespace Text_Filter
{
    using System;
    using System.Collections.Generic;
    using System.Linq;

    class Program
    {
        static void Main()
        {
            List<string> banWords = Console.ReadLine()
                .Split(new char[] { ' ', ',' }, StringSplitOptions.RemoveEmptyEntries)
                .ToList();

            string text = Console.ReadLine();

            for (int i = 0; i < banWords.Count; i++)
            {
                string word = banWords[i];

                string replaceWord = new string('*', word.Length);
                text = text.Replace(word, replaceWord);
            }
            Console.WriteLine(text);
        }
    }
}
