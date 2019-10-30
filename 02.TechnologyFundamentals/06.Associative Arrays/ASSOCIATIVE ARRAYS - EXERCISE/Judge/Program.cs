

namespace Judge
{
    using System;
    using System.Collections.Generic;
    using System.Linq;

    public class Program
    {
        public static void Main()
        {
            var judgeResults = new Dictionary<string, Dictionary<string, int>>();
            var userNameResults = new Dictionary<string, int>();
                
                

            while (true)
            {
                string input = Console.ReadLine();
                if (input == "no more time")
                {
                    break;
                }

                List<string> lines = input.Split(" -> ").ToList();
                string userName = lines[0];
                string contest = lines[1];
                int points = int.Parse(lines[2]);

                if (judgeResults.ContainsKey(contest) == false)
                {
                    judgeResults[contest] = new Dictionary<string, int>();
                    judgeResults[contest].Add(userName, points);
                    
                }
                else
                {
                    if (judgeResults[contest].ContainsKey(userName)==false)
                    {
                        judgeResults[contest].Add(userName, points);
                        

                    }
                    else
                    {
                        if (judgeResults[contest][userName] < points)
                        {
                            judgeResults[contest][userName] = points;
                            
                        }
                    }
                }
            }

            foreach (var kvp in judgeResults)
            {
                foreach (var user in kvp.Value)
                {
                    if (userNameResults.ContainsKey(user.Key) == false)
                    {
                        userNameResults[user.Key] = user.Value;
                    }
                    else
                    {
                        userNameResults[user.Key] += user.Value;
                    }
                }
            }

            

            foreach (var contest in judgeResults)
            {
                Console.WriteLine($"{contest.Key}: {contest.Value.Count} participants");

                var result = contest.Value
                    .OrderByDescending(kvp => kvp.Value)
                    .ThenBy(kvp => kvp.Key)
                    .ToDictionary(kvp => kvp.Key, kvp => kvp.Value);
                int number = 1;

                foreach (var kvp in result)
                {
                    
                    Console.WriteLine($"{number}. {kvp.Key} <::> {kvp.Value}");
                    number++;
                }
            }

            Console.WriteLine("Individual standings:");

            var decendigUsers = userNameResults
                .OrderByDescending(kvp => kvp.Value)
                .ThenBy(kvp => kvp.Key)
                .ToDictionary(kvp => kvp.Key, kvp => kvp.Value);

            int count = 1;
            foreach (var kvp in decendigUsers)
            {
                Console.WriteLine($"{count}. {kvp.Key} -> {kvp.Value}");
                count++;
            }


        }
    }
}
