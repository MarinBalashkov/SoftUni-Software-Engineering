

namespace Problem_3._Baking_Factory
{
    using System;
    using System.Collections.Generic;
    using System.Linq;

   public class Program
    {
       public static void Main()
        {

            int bestQuality = int.MinValue;
            double greaterAverage = Double.MinValue;
            int maxBatchLength = 0;

            List<int> result = new List<int>();

            while (true)
            {
                string input = Console.ReadLine();

                if (input == "Bake It!")
                {
                    break;
                }

                List<int> batchesOfBread = input.Split('#')
                    .Select(int.Parse)
                    .ToList();

                int currentQualitiesSum = 0;
                

                for (int i = 0; i < batchesOfBread.Count; i++)
                {
                    int Quality = batchesOfBread[i];
                    currentQualitiesSum += Quality;

                }

                double currentAverage = currentQualitiesSum / batchesOfBread.Count;
                int curentBattchLength = batchesOfBread.Count;



                if (currentQualitiesSum > bestQuality)
                {
                    bestQuality = currentQualitiesSum;
                    greaterAverage = currentAverage;
                    maxBatchLength = curentBattchLength;

                    result = batchesOfBread;
                }
                else if (currentQualitiesSum == bestQuality)
                {
                    if (currentAverage > greaterAverage)
                    {
                        bestQuality = currentQualitiesSum;
                        greaterAverage = currentAverage;
                        maxBatchLength = curentBattchLength;

                        result = batchesOfBread;
                    }
                    else if (currentAverage == greaterAverage)
                    {
                        if (curentBattchLength > maxBatchLength)
                        {
                            bestQuality = currentQualitiesSum;
                            greaterAverage = currentAverage;
                            maxBatchLength = curentBattchLength;

                            result = batchesOfBread;
                        }
                    }
                }


            }

            Console.WriteLine($"Best Batch quality: {bestQuality}");
            Console.WriteLine(string.Join(' ', result));
        }
    }
}
