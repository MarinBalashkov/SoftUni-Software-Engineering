
namespace new_try
{
using System;
    using System.Collections.Generic;

    public class Program
    {
        public static void Main()
        {
            var input = Console.ReadLine();

            var result = new Dictionary<string, List<int>>();

            while (input != "Slide rule")
            {
                var splitInput = input.Split(new char[] { ':', '-', '>' }, StringSplitOptions.RemoveEmptyEntries);
                var townName = splitInput[0].ToString();
                var passengersCount = int.Parse(splitInput[2]);

                if (splitInput[1] == "ambush")
                {
                    if (result.ContainsKey(townName))
                    {
                        result[townName][0] = 0;
                        result[townName][1] -= passengersCount;
                    }
                }
                else
                {
                    var time = int.Parse(splitInput[1]);
                    if (!result.ContainsKey(townName))
                    {
                        result[townName] = new List<int>() { time, passengersCount };
                    }
                    else
                    {
                        if (result[townName][0] > time || result[townName][0] == 0)
                        {
                            result[townName][0] = time;
                        }
                        

                        result[townName][1] += passengersCount;
                    }
                }

                input = Console.ReadLine();
            }
        }
    }
}
