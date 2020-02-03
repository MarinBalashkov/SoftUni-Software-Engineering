namespace _5.Fashion_Boutique
{
    using System;
    using System.Collections.Generic;
    using System.Linq;

    public class Program
    {
        public static void Main()
        {
            var clothes = new Stack<int>(Console.ReadLine().Split().Select(int.Parse).ToList());
            var rackCapacity = int.Parse(Console.ReadLine());
            var currentRackCapacity = rackCapacity;
            var racksCount = 0;

            while (clothes.Any())
            {
                var clothValue = clothes.Peek();
                if ((currentRackCapacity - clothValue) > 0)
                {
                    currentRackCapacity -= clothValue;
                    clothes.Pop();
                    if (!clothes.Any())
                    {
                        racksCount++;
                    }
                }
                else if ((currentRackCapacity - clothValue) == 0)
                {
                    currentRackCapacity = rackCapacity;
                    racksCount++;
                }
                else
                {
                    currentRackCapacity = rackCapacity;
                    racksCount++;
                }
            }

            Console.WriteLine(racksCount);
        }
    }
}
