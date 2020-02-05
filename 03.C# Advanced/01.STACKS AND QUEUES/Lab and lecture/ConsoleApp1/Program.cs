using System;
using System.Collections.Generic;
using System.Linq;

namespace ConsoleApp1
{
    class Program
    {
        static void Main(string[] args)
        {
            //Queue<int> queue = new Queue<int>();
            //queue.Enqueue(1);
            //queue.Enqueue(2);

            //var num = queue.Dequeue();

            var allchildreen = Console.ReadLine().Split();
            Queue<string> children = new Queue<string>(allchildreen);

            while (children.Count > 1)
            {
                var currentChild = children.Dequeue();

                if (true)
                {

                }
            }
        }
    }
}
