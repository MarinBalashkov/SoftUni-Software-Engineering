using System;

namespace ConsoleApp5
{
    public class Cat
    {
        public string Name { get; set; }
        public int Age { get; set; }
        public string Color { get; set; }

    }

    public class Program
    {
        public static void Main(string[] args)
        {
            var cat = new Cat
            {
                Name = "Ivan",
                Age = 5


            };
            ChangeName(cat);

            Console.WriteLine(cat.Name);

        }
        public static void ChangeName(Cat cat)
        {
            cat.Name = "Pesho";
        }

    }
}
