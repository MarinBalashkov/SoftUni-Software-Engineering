using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace radians_to_degrees
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.Write("radians: ");
            var radians = Double.Parse(Console.ReadLine());


            double degrees = Math.Round(radians * (180/Math.PI));
           
            Console.WriteLine($"degrees = {degrees}");
          
        }
    }
}
