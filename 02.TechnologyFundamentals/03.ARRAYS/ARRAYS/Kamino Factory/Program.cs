

namespace Kamino_Factory
{
    using System;
    using System.Collections.Generic;
    using System.Linq;

    class Program
    {
        static void Main()
        {
            int n = int.Parse(Console.ReadLine());

            int maxSeqLEngth = int.MinValue;
            int minSeqStart = int.MinValue;
            int maxSum = int.MinValue;

            List<int> result = new List<int>();

            while (true)
            {
                string input = Console.ReadLine();
                if (input == "Clone them!")
                {
                    break;
                }

                List<int> currenDNA = input
                    .Split('!', StringSplitOptions.RemoveEmptyEntries)
                    .Select(int.Parse)                    
                    .ToList();

                int currenSum = 0;

                for (int i = 0; i < currenDNA.Count; i++)
                {
                    int currentNum = currenDNA[i];
                    currenSum += currentNum;
                }

                int longestSeqLength = 1;
                int longestSeqStart = 0;

                int currentSeqLength = 1;
                int currentSeqStart = 0;
                

                for (int i = 1; i < currenDNA.Count; i++)
                {
                    int firstNumber = currenDNA[i - 1];
                    int secondNumber = currenDNA[i];
                    if (firstNumber ==1 && secondNumber == 1)
                    {
                        currentSeqLength++;

                        if (currentSeqLength > longestSeqLength)
                        {
                            longestSeqLength = currentSeqLength;
                            longestSeqStart = currentSeqStart;
                        }
                    }
                    else
                    {
                        currentSeqLength = 1;
                        currentSeqStart = i;
                    }
                }
               

                if (longestSeqLength > maxSeqLEngth)
                {
                    maxSeqLEngth = longestSeqLength;
                    result = currenDNA;

                }
                else if (longestSeqLength == maxSeqLEngth)
                {
                    if (longestSeqStart < minSeqStart)
                    {
                        minSeqStart = longestSeqStart;
                        result = currenDNA;
                    }
                    else if (longestSeqStart == minSeqStart)
                    {
                        if (currenSum > maxSum)
                        {
                            maxSum = currenSum;
                            result = currenDNA;
                        }
                    }
                }




            }

            Console.WriteLine(string.Join('!', result));
        }
    }
}
