namespace _07.Truck_Tour
{
    using System;
    using System.Collections.Generic;
    using System.Linq;

    public class Program
    {
        public static void Main()
        {
            int pumpCount = int.Parse(Console.ReadLine());
            Queue<int> difference = new Queue<int>();

            for (int i = 0; i < pumpCount; i++)
            {
                List<int> pumpProps = Console.ReadLine().Split().Select(int.Parse).ToList();

                difference.Enqueue(pumpProps[0] - pumpProps[1]);


            }

            int index = 0;

            while (true)
            {
                Queue<int> coppyDifference = new Queue<int>(difference);

                int fuel = -1;


                while (coppyDifference.Any())
                {
                    if (coppyDifference.Peek() > 0 & fuel == -1)
                    {
                        fuel = coppyDifference.Dequeue();
                        difference.Enqueue(difference.Dequeue());
                    }
                    else if (coppyDifference.Peek() < 0 && fuel == -1)
                    {
                        coppyDifference.Enqueue(coppyDifference.Dequeue());
                        difference.Enqueue(difference.Dequeue());
                        index++;
                    }
                    else
                    {
                        fuel += coppyDifference.Dequeue();
                        if (fuel < 0)
                        {

                            break;
                        }
                    }
                }

                if (fuel >= 0)
                {
                    Console.WriteLine(index);
                    return;
                }

                index++;
            }
        }
    }
}
