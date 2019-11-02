

namespace _03.Articles_2._0
{
    using System;
    using System.Collections.Generic;
    using System.Linq;

    public class Article
    {
        public Article(string title, string content, string author)
        {

            this.Title = title;
            this.Content = content;
            this.Author = author;

        }

        public string Title { get; set; }
        public string Content { get; set; }
        public string Author { get; set; }

        public override string ToString()
        {
            return $"{Title} - {Content}: {Author}";
        }


    }
    public class Program
    {
        public static void Main()
        {
            int n = int.Parse(Console.ReadLine());

            var listedArticles = new List<Article>();

            for (int i = 0; i < n; i++)
            {
                List<string> inputLine = Console.ReadLine()
                    .Split(", ")
                    .ToList();
                string title = inputLine[0];
                string content = inputLine[1];
                string author = inputLine[2];

                var article = new Article(title, content, author);

                listedArticles.Add(article);

            }

            string command = Console.ReadLine();

            var result = new List<Article>();

            if (command == "title")
            {
                result = listedArticles.OrderBy(x => x.Title).ToList();
            }
            else if (command == "content")
            {
                result = listedArticles.OrderBy(x => x.Content).ToList();
            }
            else if (command == "author")
            {
                result = listedArticles.OrderBy(x => x.Author).ToList();
            }

            foreach (var article in result)
            {
                Console.WriteLine(article);
            }

            //Console.WriteLine(string.Join(Environment.NewLine, result.Select(x => 
            //$"{x.Title} - {x.Content}: {x.Author}")));
        }
    }
}
