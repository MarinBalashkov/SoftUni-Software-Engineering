

namespace OBJECTS_AND_CLASSES_LAB
{

    using System;
    using System.Collections.Generic;
    using System.Linq;

    public class Cat
    {
        public Cat(string name, int age)
        {
            if (name == null || name.Length < 2)
            {

            }

            if (age > 0)
            {

            }
        }

        public string Name { get; set; }
        public int Age { get; set; }
        public string Color { get; set; }

    }
    public class Dog
    {
        public string Name { get; set; }
        public string Breed { get; set; }
        public string Image { get; set; }
        public int Age { get; set; }

        public bool IsSleeping { get; set; }

        public void GoTOSleep()
        {
            if (IsSleeping == false)
            {
                IsSleeping = true;
            }
        }
        public void WakeUp()
        {
            IsSleeping = false;
        }

    }

    public class Program
    {
        public static void Main()
        {

            var dog = new Dog
            {
                Name = "Ivan",
                Age = 5
            };

            dog.GoTOSleep();
            dog.WakeUp();

        

            


            Cat cat = new Cat();
            cat.Name = "Ivan";
            string name = cat.Name;

            var firstDog = new Dog
            {
                Name = "Sharo",
                Breed = "Hyski",
                Image = "http://"
            };

            var dog = new Dog();
            dog.Name = "Pesho";
            dog.Breed = "Street";
            dog.Age = 5;


            var firstcCat = new Cat
            {
                Name = "Pesho",
                Age = 10,
                Color = "Red",
                
            };

            var secondtcCat = new
            {
                Name = "Ivan",
                Age = 6,
                Color = "Black"
            };

            var thirdCat = new Cat
            {
                Name = "Mara",
                Age = 7,
                Color = "White"



            }
            

            

            string catName = "Pesho";
            int firstcatAge = 6;
            string firstCatColor = "Black";
        }
    }
}
