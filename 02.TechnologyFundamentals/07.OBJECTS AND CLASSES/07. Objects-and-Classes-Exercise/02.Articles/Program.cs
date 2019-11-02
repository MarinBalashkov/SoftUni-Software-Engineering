

namespace _02.Articles
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

        public void Edit(string elements)
        {
            this.Content = elements;
        }

        public void ChangeAuthor(string elements)
        {
            this.Author = elements;
        }

        public void Rename(string elements)
        {
            this.Title = elements;

        }

        public override string ToString()
        {
            return $"{Title} - {Content}: {Author}";
        }


    }
    public class Program
    {
        public static void Main()
        {
            List<string> input = Console.ReadLine().Split(", ").ToList();
            string title = input[0];
            string content = input[1];
            string author = input[2];

            var article = new Article(title, content, author);
            
            int n = int.Parse(Console.ReadLine());

            for (int i = 0; i < n; i++)
            {
                List<string> commands = Console.ReadLine().Split(": ").ToList();
                string command = commands[0];
                string elements = commands[1];

                if (command == "Edit")
                {
                    article.Edit(elements);
                }
                else if (command == "ChangeAuthor")
                {
                    article.ChangeAuthor(elements);
                }
                else if (command == "Rename")
                {
                    article.Rename(elements);
                }
            }
            Console.WriteLine(article);
           
        }
    }
}
