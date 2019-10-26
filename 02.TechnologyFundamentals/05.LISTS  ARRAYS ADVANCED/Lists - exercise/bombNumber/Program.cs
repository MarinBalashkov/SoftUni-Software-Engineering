using System;

namespace bombNumber
{
    using System;
    using System.Collections.Generic;
    using System.Linq;

   public class Program
    {
       public static void Main()
        {
            List<int> numbers = Console.ReadLine()
                .Split(' ')
                .Select(int.Parse)
                .ToList();

            List<int> inputs = Console.ReadLine()
                .Split(' ')
                .Select(int.Parse)
                .ToList();

            int bombNumber = inputs[0];
            int power = inputs[1];


            for (int i = 0; i < numbers.Count; i++)
            {
                int curentBombNumber = numbers[i];

                if (bombNumber == curentBombNumber)
                {
                    int startIndex = i - power;
                    int endIndex = i + power;

                    if (startIndex <0)
                    {
                        startIndex = 0;
                    }
                    if (endIndex > numbers.Count -1)
                    {
                        endIndex = numbers.Count - 1;
                    }
                    if (startIndex > numbers.Count - 1 || endIndex < 0)
                    {
                        continue;
                    }

                    numbers.RemoveRange(startIndex, endIndex - startIndex + 1);
                  

                    i = startIndex - 1;
                }
            }

            int sum = numbers.Sum();

            Console.WriteLine(sum);

            
            

        }
    }
}
