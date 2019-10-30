using System;
using System.Collections.Generic;
using System.Linq;

namespace ConsoleApp3
{
    public class Program
    {
        public static void Main()
        {
            //cat someCat = new cat
            //{
            //    Name = "Ivan",
            //    Age = 10,
            //    Color = "White"
            //};

            //someCat.Name = "Pesho";

            //Console.WriteLine(someCat.Name);
            //Console.WriteLine(someCat.Age);
            //Console.WriteLine(someCat.Color);

            List<cat> cats = new List<cat>();

            var firstCat = new cat
            {
                Name = "Pesho",
                Age = 10,
                Color = "White"
            };

            var secondCat = new cat
            {
                Name = "Ivan",
                Age = 5,
                Color = "Black"

            };
            var thirdcat = new cat
            {
                Name = "Stamat",
                Age = 9,
                Color = "Orange"
            };

            cats.Add(firstCat);
            cats.Add(secondCat);
            cats.Add(thirdcat);


            var result = cats
                .OrderBy(x => x.Age)
                .ThenBy(x => x.Name)
                .ToList();

            foreach (var cat in result)
            {
                Console.WriteLine($"{cat.Name} - {cat.Age}");
            }



        }
    }
}
