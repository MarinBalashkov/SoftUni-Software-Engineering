using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Cinema
{
    class Program
    {
        static void Main(string[] args)
        {
            string TicketType = Console.ReadLine().ToLower();
            int Row = int.Parse(Console.ReadLine());
            int Column = int.Parse(Console.ReadLine());

            double TicketPrice = 0;
            
            switch(TicketType)
            {
                case "premiere": TicketPrice = 12.00;
                    break;
                case "normal": TicketPrice = 7.50;
                    break;
                default: TicketPrice = 5.00;
                    break;
                
            }
            

            double result = Row * Column * TicketPrice;
            Console.WriteLine($"{result:F2} leva");
        }
    }
}
