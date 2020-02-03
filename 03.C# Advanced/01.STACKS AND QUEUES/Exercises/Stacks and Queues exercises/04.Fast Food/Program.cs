namespace _04.Fast_Food
{
    using System;
    using System.Collections.Generic;
    using System.Linq;

    public class Program
    {
        public static void Main()
        {
            int foodQuantity = int.Parse(Console.ReadLine());
            var orders = new Queue<int>(Console.ReadLine().Split().Select(int.Parse).ToList());
            int biggestOrder = orders.Max();

            while (orders.Any())
            {
                int orderQuantity = orders.Peek();
                if (foodQuantity >= orderQuantity)
                {
                    foodQuantity -= orderQuantity;
                    orders.Dequeue();
                }
                else
                {
                    break;
                }
            }

            Console.WriteLine(biggestOrder);

            if (orders.Any())
            {
                Console.WriteLine($"Orders left: {string.Join(" ", (orders))}");
            }
            else
            {
                Console.WriteLine("Orders complete");
            }
        }
    }
}
