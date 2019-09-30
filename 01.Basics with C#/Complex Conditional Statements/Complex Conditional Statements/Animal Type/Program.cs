using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Animal_Type
{
    class Program
    {
        static void Main(string[] args)
        {
            string AnimalName = Console.ReadLine().ToLower();

            string AnimalType = null;

            switch (AnimalName)
            {
                case "dog": AnimalType = "mammal";
                    break;
                case "crocodile": 
                case "tortoise":
                case "snake": AnimalType = "reptile";
                    break;
                default: Console.WriteLine("unknown");
                    break;

            }
            Console.WriteLine(AnimalType);


        }
    }
}
