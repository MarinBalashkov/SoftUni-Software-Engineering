using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Concatenate_Data
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.Write("First name: ");
            string Firstname = Console.ReadLine();
            Console.Write("Last name: ");
            string Lastname = Console.ReadLine();
            Console.Write("age: ");
            int age = int.Parse(Console.ReadLine());
            Console.Write("town: ");
            string town = Console.ReadLine();
            Console.WriteLine("You are {0} {1}, a {2}- years old person from {3}.", Firstname, Lastname, age, town);

        }
    }
}
