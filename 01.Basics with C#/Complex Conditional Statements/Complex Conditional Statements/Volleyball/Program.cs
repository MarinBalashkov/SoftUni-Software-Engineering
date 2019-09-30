using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Volleyball
{
    class Program
    {
        static void Main(string[] args)
        {
            string Year = Console.ReadLine().ToLower();
            double p = double.Parse(Console.ReadLine());
            double h = double.Parse(Console.ReadLine());

            double games = (((48 - h) * 3.0 / 4) + h + (p * 2 / 3));
            double Totalgames = 0;
            if (Year == "leap")
            {
                Totalgames = (games * 0.15) + games;
            }
            else
            {
                Totalgames = games;
            }
            Console.WriteLine((int)Totalgames);
        }
    }
}
