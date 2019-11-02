

namespace _01.Advertisement_Message
{
    using System;
    using System.Collections.Generic;
    using System.Linq;

    public class Program
    {
        static void Main()
        {
            int n = int.Parse(Console.ReadLine());

            var phrases = new List<string> {"Excellent product."
                , "Such a great product."
                , "I always use that product."
                , "Best product of its category."
                , "Exceptional product."
                , "I can’t live without this product."};

            var events = new List<string> { "Now I feel good."
                , "I have succeeded with this product."
                , "Makes miracles. I am happy of the results!"
                , "I cannot believe but now I feel awesome."
                , "Try it yourself, I am very satisfied."
                , "I feel great!" };

            var authors = new List<string> { "Diana"
                , "Petya"
                , "Stella"
                , "Elena"
                , "Katya"
                , "Iva"
                , "Annie"
                , "Eva" };

            var cities = new List<string> { "Burgas"
                , "Sofia"
                , "Plovdiv"
                , "Varna"
                , "Ruse" };

            var random = new Random();

            for (int i = 0; i < n; i++)
            {
                int randomPhrases = random.Next(0, phrases.Count);
                int randomEvents = random.Next(0, events.Count);
                int randomAuthors = random.Next(0, authors.Count);
                int randomCities = random.Next(0, cities.Count);

                Console.WriteLine($"{phrases[randomPhrases]}{events[randomEvents]}{authors[randomAuthors]}-{cities[randomCities]}");
            }
       

        }

    }
}
