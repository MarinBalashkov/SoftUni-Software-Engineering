

namespace Unit._01
{
    using System;
    using System.Collections.Generic;
    using System.Linq;

    public class Program
    {
        public static void Main()
        {
            //string word = "Hello world";

            //    var indexOfW = word.ToLower().LastIndexOf("w");

            //    var partOfText = word.Substring(indexOfW);
            //    Console.WriteLine(partOfText);

            string word = Console.ReadLine();
            string text = Console.ReadLine();

            //text = text.Replace(word, string.Empty);

            //Console.WriteLine(text);

            int index = text.IndexOf(word);

            while (index != -1)
            {
                text = text.Remove(index, word.Length);
                index = text.IndexOf(word)
            }
        }
    }
}
