

namespace Drum_Set
{
    using System;
    using System.Collections.Generic;
    using System.Linq;

   public class Program
    {
       public static void Main()
        {
            double savings = double.Parse(Console.ReadLine());

            List<int> drumSet = Console.ReadLine()
                .Split(" ")
                .Select(int.Parse)
                .ToList();
            List<int> manipulatedDrumSet = new List<int>();
            for (int i = 0; i < drumSet.Count; i++)
            {
                int currentDrum = drumSet[i];
                manipulatedDrumSet.Add(currentDrum);


            }

            while (true)
            {
                string input = Console.ReadLine();
                if (input == "Hit it again, Gabsy!")
                {
                    break;
                }

                int hitPower = int.Parse(input);
                if (hitPower < 0)
                {
                    continue;
                }

                for (int i = 0; i < manipulatedDrumSet.Count; i++)
                {
                    int currentDrum = manipulatedDrumSet[i];
                    int poweredDrum = currentDrum - hitPower;
                    manipulatedDrumSet[i] = poweredDrum;
                }

                for (int i = 0; i < manipulatedDrumSet.Count; i++)
                {
                    int currentDrum = manipulatedDrumSet[i];
                    if (currentDrum <= 0)
                    {
                        int originalDrumValue = drumSet[i];
                        double newDrumPrice = (double)(3 * originalDrumValue);
                        if (savings >= newDrumPrice)
                        {
                            savings -= newDrumPrice;
                            
                            manipulatedDrumSet.Insert(i, originalDrumValue);
                            manipulatedDrumSet.RemoveAt(i +1);
                        }
                        else
                        {
                            manipulatedDrumSet.RemoveAt(i);
                            drumSet.RemoveAt(i);
                            i = -1;

                        }
                    }
                }
            }

            Console.WriteLine(string.Join(" ", manipulatedDrumSet));
            Console.WriteLine($"Gabsy has {savings:f2}lv.");
        }
    }
}
