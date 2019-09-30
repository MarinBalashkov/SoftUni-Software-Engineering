using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Day_of_Week
{
    class Program
    {
        static void Main(string[] args)
        {
            int day = int.Parse(Console.ReadLine());


            string WeekDay = null;

                switch (day)
            {
                case 1: WeekDay = "Monday";
                    break;
                case 2: WeekDay = "Tuesday";
                    break;
                case 3: WeekDay = "Wednesday";
                    break;
                case 4: WeekDay = "Thursday";
                    break;
                case 5: WeekDay = "Friday";
                    break;
                case 6: WeekDay = "Saturday";
                    break;
                case 7: WeekDay = "Sunday";
                    break;
                default: Console.WriteLine("error");
                    break;
            }

            Console.WriteLine(WeekDay);

                
        }
    }
}
