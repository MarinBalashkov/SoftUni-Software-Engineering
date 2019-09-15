using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace House
{
    class Program
    {
        static void Main(string[] args)
        {
            int n = int.Parse(Console.ReadLine());

            string baseStars = new string('*', n - 2);
            string baseRow = $"|{baseStars}|";



            int starsCount = 1;
            if (n % 2 == 0)
            {
                starsCount = 2;
            }

            for (int i = 0; i < (n + 1) / 2; i++)
            {
                string roofStars = new string('*', starsCount);
                int dashCont = (n - starsCount) / 2;
                string dashes = new string('-', dashCont);
                string row = dashes + roofStars + dashes;
                Console.WriteLine(row);
                starsCount += 2;

            }


            for (int i = 0; i < n/2; i++)
            {
                Console.WriteLine(baseRow);
            }
        }
    }
}
