using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace @try
{
    class Program
    {
        static void Main(string[] args)
        {
            int n = int.Parse(Console.ReadLine());

            int towerCount = n / 2;
            string tower = new string('^', towerCount);
            int topMidCount = ((2 * n) - (2*towerCount)) - 4;
            string toprMid = new string('_', topMidCount);
            string TopRowLeftRight = "/" + tower + "\\";

            string bottower = new string('_', towerCount);
            string botmid = new string(' ',topMidCount);
            string leftRightbot = "\\" + bottower + "/";

            Console.WriteLine($"{TopRowLeftRight}{toprMid}{TopRowLeftRight}");
            int rowCount = 2 * n - 2;
            for (int i = 1; i <= n - 2; i++)
            {
                string spaces = new string(' ', rowCount);
                string loppRow = "|" + spaces + "|";
                if (i == n - 2)
                {
                    string lastRowSpaces = new string(' ', (rowCount - topMidCount)/2);
                    string lastrowdashes = new string('_', topMidCount);
                    Console.WriteLine($"|{lastRowSpaces}{lastrowdashes}{lastRowSpaces}|");
                }
                else
                {
                    Console.WriteLine(loppRow);
                }

            }





            Console.WriteLine($"{leftRightbot}{botmid}{leftRightbot}");


        }
    }
}
