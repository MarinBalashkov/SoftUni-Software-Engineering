using System;

namespace _06.Strong_Number
{
    class Program
    {
        static void Main(string[] args)
        {
            int number = int.Parse(Console.ReadLine());
            int originalNumber = number;

            int digit = 0;
            int sumFact = 0;

            while (number != 0)
            {
                digit = number % 10;
                number /= 10;

                int fact = 1;
                for (int i = 1; i <= digit; i++)
                {
                    fact *= i;
                }
                sumFact += fact;
            }

            if (originalNumber == sumFact)
            {
                Console.WriteLine("yes");
            }
            else
            {
                Console.WriteLine("no");
            }
        }
    }
}
