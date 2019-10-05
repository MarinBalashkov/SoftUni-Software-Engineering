namespace _01
{
    using System;

    class Program
    {
        static void Main()
        {
            int input = int.Parse(Console.ReadLine());
            Console.WriteLine($"The number is divisible by {GetBiggestDivisibleNumber(input)}");
        }

        public static int GetBiggestDivisibleNumber(int number)
        {
            int result = 0;
            if (number % 2 ==0)
            {
                result = 2;
            }
            if(number % 3 == 0)
            {
                result = 3;
            }
            if (number % 6 == 0)
            {
                result = 6;
            }
            if (number % 7 == 0)
            {
                result = 7;
            }
            if (number % 10 == 0)
            {
                result = 10;
            }

            return result;
        }
    }
}
