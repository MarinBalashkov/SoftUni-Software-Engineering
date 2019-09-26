using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Triangle_of_Dollars
{
    class Program
    {
        static void Main(string[] args)
        {
            int n = int.Parse(Console.ReadLine());

            for (int i = 0; i < n; i++)
            {
                for (int j = 0; j < i; j++)
                {
                    Console.Write("$ ");
                }
                Console.WriteLine("$");
            }
            for (int i = n; i >= 1; i--)
            {
                for (int j = 1; j <= i - 1; j++)
                {
                    Console.Write("$ ");
                }
                Console.WriteLine("$");
            }


        }
    }
}
