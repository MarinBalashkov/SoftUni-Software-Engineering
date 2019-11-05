using System;
using System.Collections.Generic;
using System.Linq;

namespace ConsoleApp6
{
    public class Cat
    {
        public Cat(string name)
        {
            ValidateCatName(name);

            
            this.Name = name;
        }
        public Cat(string name, int age)
        {
            ValidateCatName(name);
            if (age > 0)
            {
                throw new Exception("Cat age must be more than 0.");
            }
            this.Name = name;
            this.Age = age;
        }

        public string Name { get; set; }
        public int Age { get; set; }
        public string Color { get; set; }

        void ValidateCatName(string name)
        {
            if (name == null || name.Length < 2)
            {
                throw new Exception("Cat name is not valid. It should be more than 2 symbols long.");
            }

        }

    }

    public class Program
    {
        public static void Main()
        {
            var cat = new Cat("Ivan");

            
            var newCat = new Cat("Pesho", 7);

        }
    }
}
