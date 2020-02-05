using System;
using System.Collections.Generic;
using System.Linq;

namespace _05._5._Print_Even_Numbers
{
    class Program
    {
        static void Main()
        {
            List<int> numbers = Console.ReadLine().Split()
                .Select(int.Parse).ToList();

            Queue<int> queueNumbers = new Queue<int>();

            foreach (var num in numbers)
            {
                queueNumbers.Enqueue(num);
            }

            while (queueNumbers.Count >1 )
            {
                Console.Write($"{queueNumbers.Dequeue()}");
            }
            Console.WriteLine(queueNumbers.Peek());



        }
    }
}
