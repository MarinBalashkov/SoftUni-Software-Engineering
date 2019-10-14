using System;

namespace _02.Divison
{
    public class Program
    {
        public static void Main()
        {
            int Number = int.Parse(Console.ReadLine());

            int Div = 0;

            if (Number % 2 == 0)
            {              
                Div = 2;
            }

            if (Number % 3 == 0)
            {
                Div = 3;
            }
            
            if (Number % 6 == 0)
            {
                Div = 6;
            }

            if (Number % 7 == 0)
            {
                Div = 7;
            }

            if (Number % 10 == 0)
            {
                Div = 10;
            }
            

            if (Div == 2 || Div ==3 || Div == 6 || Div == 7|| Div ==10)
            {
                Console.WriteLine($"The number is divisible by {Div}");

            }
            else
            {
                Console.WriteLine("Not divisible");
            }
            


        }
    }
}
