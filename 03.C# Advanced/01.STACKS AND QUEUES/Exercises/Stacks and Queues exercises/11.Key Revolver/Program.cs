namespace _11.Key_Revolver
{
    using System;
    using System.Collections.Generic;
    using System.Linq;

    public class Program
    {
        public static void Main()
        {
            int bulletPrice = int.Parse(Console.ReadLine());
            int barrelSize = int.Parse(Console.ReadLine());
            int[] inputBullets = Console.ReadLine().Split(" ", StringSplitOptions.RemoveEmptyEntries)
                .Select(int.Parse)
                .ToArray();
            int[] inputLocks = Console.ReadLine().Split(" ", StringSplitOptions.RemoveEmptyEntries)
                .Select(int.Parse)
                .ToArray();
            int intellugence = int.Parse(Console.ReadLine());

            Stack<int> bullets = new Stack<int>(inputBullets);
            Queue<int> locks = new Queue<int>(inputLocks);

            int reloadingCounter = 0;
            int bullerCounter = 0;

            while (bullets.Count != 0 && locks.Count != 0)
            {

                int bullet = bullets.Pop();
                reloadingCounter++;
                bullerCounter++;
                int currentLock = locks.Peek();

                if (bullet <= currentLock)
                {
                    Console.WriteLine("Bang!");
                    locks.Dequeue();
                }
                else
                {
                    Console.WriteLine("Ping!");
                }

                if (reloadingCounter == barrelSize && bullets.Count > 0)
                {
                    Console.WriteLine("Reloading!");
                    reloadingCounter = 0;
                }

            }

            if (bullets.Count != 0)
            {

                Console.WriteLine($"{bullets.Count} bullets left. Earned ${intellugence - (bullerCounter * bulletPrice)}");
            }
            else if (locks.Count != 0)
            {
                Console.WriteLine($"Couldn't get through. Locks left: {locks.Count}");
            }
            else
            {
                int shotsBullets = (inputBullets.Length - bullets.Count);
                Console.WriteLine($"{bullets.Count} bullets left. Earned ${intellugence - (shotsBullets * bulletPrice)}");
            }
        }
    }
}
