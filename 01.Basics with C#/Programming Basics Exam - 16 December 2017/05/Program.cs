using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _05
{
    class Program
    {
        static void Main(string[] args)
        {
            int n = int.Parse(Console.ReadLine());

            string firstrowdashet = new string('-', 2 * n);
            string firstrowStars = new string('*', n);
            string firstLastRow = firstrowdashet + firstrowStars + firstrowdashet;
            Console.WriteLine(firstLastRow);


            int dashcount = 2 * n;
            int midcount = n + 2;

            for (int i = 1; i <= n; i++)
            {

                if (i <= n / 2)
                {
                    dashcount -= 2;

                    string dashtopmid = new string('-', dashcount);
                    string strarTopMid = new string('*', i);
                    string MidTop = new string('$', midcount);
                    string row1 = dashtopmid + strarTopMid + MidTop + strarTopMid + dashtopmid;
                    Console.WriteLine(row1);

                    midcount += 2;


                }
                else
                {
                    dashcount -= 1;
                    string dashbotmid = new string('-', dashcount);
                    string mid = new string('~', (5 * n) - 2 * dashcount - 4);
                    string row2 = dashbotmid + "**" + mid + "**" + dashbotmid;
                    Console.WriteLine(row2);
                    if (i == n)
                    {
                        string mid2 = new string('|', (5 * n) - (2 * dashcount) - 2);
                        Console.WriteLine($"{dashbotmid}*{mid2}*{dashbotmid}");
                    }

                }

                for (int j = n - 1; j >= 1; j--)
                {
                    if (j >= n / 2)
                    {

                        string dashbotmid = new string('-', dashcount);
                        string mid = new string('~', (5 * n) - 2 * dashcount - 4);
                        string row2 = dashbotmid + "**" + mid + "**" + dashbotmid;
                        Console.WriteLine(row2);
                        dashcount += 1;

                    }



                    //else 
                    //{
                    //    midcount -= 2;

                    //    string dashtopmid = new string('-', dashcount);
                    //    string strartopmid = new string('*', j);
                    //    string midtop = new string('$', midcount);
                    //    string row1 = dashtopmid + strartopmid + midtop + strartopmid + dashtopmid;
                    //    Console.WriteLine(row1);
                    //    dashcount += 2;




                }

            }
        }
    }
}  }


           
