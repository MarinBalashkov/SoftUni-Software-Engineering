using System;
using System.Collections.Generic;

namespace ConsoleApp7
{
    public class Cat
    {
        public string Name { get; set; }
        public int Age { get; set; }


    }
    class Program
    {
        static void Main()
        {
            var listOfCats = new List<Cat>();

            listOfCats.Add(new Cat
            {
                Name = "Ivan",
                Age = 6
            });
        }
    }
}
