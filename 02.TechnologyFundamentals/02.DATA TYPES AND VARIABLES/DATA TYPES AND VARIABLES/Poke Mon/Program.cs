using System;

namespace Poke_Mon
{
    class Program
    {
        static void Main(string[] args)
        {
            int n = int.Parse(Console.ReadLine());
            int originalN = n;
            int m = int.Parse(Console.ReadLine());
            int y = int.Parse(Console.ReadLine());

          
            int count = 0;

            while (n >= m)
            {
                count++;
                n -= m;
                if (originalN * 0.5 == n && y > 0)
                {
                    n /= y;
                    
                }
                

            }
            Console.WriteLine(n);
            Console.WriteLine(count);




        }

    }
}
