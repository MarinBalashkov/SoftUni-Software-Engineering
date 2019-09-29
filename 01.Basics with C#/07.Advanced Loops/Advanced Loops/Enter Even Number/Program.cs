using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Enter_Even_Number
{
    class Program
    {
        static void Main(string[] args)
        {
            
            while (true)
            {
                try
                {
                    int num = int.Parse(Console.ReadLine());
                    if (num % 2 == 0)
                    {
                        Console.WriteLine($"Even number entered: {num}");
                        break;


                    }
                    Console.WriteLine("The number is not even.");
                }
                catch
                {
                    Console.WriteLine("Invalid number!");
                }

            }
           

        }
    }
}
