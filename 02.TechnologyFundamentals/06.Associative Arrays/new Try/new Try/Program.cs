using System;
using System.Collections.Generic;
using System.Linq;

namespace new_Try
{
   public class Program
    {
        public static void Main()
        {
            var judgeStatistic = new Dictionary<string, Dictionary<string, int>>();

            while (true)
            {
                string input = Console.ReadLine();
                if (input == "no more time")
                {
                    break;
                }

                List<string> lines = input
                    .Split(" -> ")
                    .ToList();

                string userName = lines[0];
                string contest = lines[1];
                int points = int.Parse(lines[2]);

                if (!judgeStatistic.ContainsKey(contest))
                {
                    judgeStatistic[contest] = new Dictionary<string, int>();
                    judgeStatistic[contest].Add(userName, points);
                }
                else
                {
                    if (!judgeStatistic[contest].ContainsKey(userName))
                    {
                        judgeStatistic[contest][userName] = points;
                    }
                    else
                    {
                        if (judgeStatistic[contest][userName] < points)
                        {
                            judgeStatistic[contest][userName] = points;
                        }
                    }
                }
            }

            var usersTotalPoints = new Dictionary<string, int>();

            foreach (var item in judgeStatistic)
            {
                foreach (var kvp in item.Value)
                {
                    if (!usersTotalPoints.ContainsKey(kvp.Key))
                    {
                        usersTotalPoints[kvp.Key] = kvp.Value;
                    }
                    else
                    {
                        usersTotalPoints[kvp.Key] += kvp.Value;
                    }
                }
            }

            foreach (var usersPoints in judgeStatistic)
            {
                int usersCount = usersPoints.Value.Count;
                Console.WriteLine($"{usersPoints.Key}: {usersCount} participants");
                int usersNameCouner = 1;
                foreach (var users in usersPoints.Value.OrderByDescending(kvp => kvp.Value).ThenBy(kvp=>kvp.Key))
                {
                    Console.WriteLine($"{usersNameCouner}. {users.Key} <::> {users.Value}");
                    usersNameCouner++;
                }
            }
        }
    }
}
