using System;
using System.Collections.Generic;
using System.Linq;

namespace ironGirder
{
    class Program
    {
        static void Main(string[] args)
        {

            var travells = new Dictionary<string, List<int>>();

            while (true)
            {
                string input = Console.ReadLine();
                if (input == "Slide rule")
                {
                    break;
                }

                List<string> firstSplit = input
                    .Split(':')
                    .ToList();
                string townName = firstSplit[0];
                string second = firstSplit[1];

                List<string> secondSplit = second
                    .Split("->")
                    .ToList();
                

                if (secondSplit[0] == "ambush")
                {
                    int passengerCount = int.Parse(secondSplit[1]);
                    if (travells.ContainsKey(townName))
                    {
                        travells[townName][0] = 0;
                        travells[townName][1] -= passengerCount;
                    }
                    
                   
                }
                else
                {
                    int time = int.Parse(secondSplit[0]);
                    int passengerCount = int.Parse(secondSplit[1]);
                    if (!travells.ContainsKey(townName))
                    {
                        travells[townName] = new List<int>();
                        travells[townName].Add(time);
                        travells[townName].Add(passengerCount);
                    }
                    else
                    {
                        if (travells[townName][0] > time)
                        {
                            travells[townName][0] = time;
                        }
                        if (travells[townName][0] == 0)
                        {
                            travells[townName][0] = time;
                        }

                        travells[townName][1] += passengerCount;

                    }

                }                    
            }

            var result = travells
                  .OrderBy(x => x.Value[0])
                  .ThenBy(x => x.Key)
                  .ToDictionary(x => x.Key, x => x.Value);

            foreach (var kvp in result)
            {
                if (kvp.Value[0] != 0)
                {
                    if (kvp.Value[1] > 0)
                    {
                        Console.WriteLine($"{kvp.Key} -> Time: {kvp.Value[0]} -> Passengers: {kvp.Value[1]}");


                    }
                }
            }


        }
    }
}
