using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _09.Sum_Digits
{
    class Program
    {
        static void Main(string[] args)
        {
            //string num = Console.ReadLine();


            //int sum = 0;
            //for (int i = 0; i < num.Length; i++)
            //{
            //    int digit = int.Parse(num[i].ToString());

            //    sum += digit;
            //}
            //Console.WriteLine(sum);

            int number = int.Parse(Console.ReadLine());

            int sum = 0;

            while(number > 0)
            {
                sum = sum + (number % 10);
                number = number / 10;
            }
            Console.WriteLine(sum);
        }
    }
}
