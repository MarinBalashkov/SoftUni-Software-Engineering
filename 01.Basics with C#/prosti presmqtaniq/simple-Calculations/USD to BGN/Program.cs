using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace USD_to_BGN
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.Write("USD: ");
            var USD = double.Parse(Console.ReadLine());

            var bgn = USD * 1.79549;

            Console.WriteLine($"bgn: {bgn:F2} BGN");
        }
    }
}
