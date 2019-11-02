

namespace _05.Teamwork_projects
{
    using System;
    using System.Collections.Generic;
    using System.Linq;

    public class Teams
    {
        public Teams()
        {
            User = new List<string>();
        }

        public List<string> User { get; set; }
        public string Team { get; set; }

    }

    public class Program
    {    
        public static void Main()
        {
            int n = int.Parse(Console.ReadLine());

            var teamWork = new List<Teams>();

            for (int i = 0; i < n; i++)
            {
                List<string> input = Console.ReadLine()
                    .Split("-")
                    .ToList();
                string user = input[0];
                string team = input[1];

                if (IsExistTeamAndUser(user, team, teamWork))
                {
                    var newTeam = new Teams();
                    newTeam.Team = team;
                    newTeam.User.Add(user);

                    teamWork.Add(newTeam);
                   
                    Console.WriteLine($"Team {team} has been created by {user}!");
                }
            }

            while (true)
            {
                string input = Console.ReadLine();
                if (input == "end of assignment")
                {
                    break;
                }

                List<string> inputLine = input.Split("->").ToList();
                string user = inputLine[0];
                string team = inputLine[1];



                //if (ChekTeamAndMember(user, team, teamWork))
                //{
                //    foreach (var currentTeam in teamWork)
                //    {
                //        if (currentTeam.Team == team)
                //        {
                //            currentTeam.User.Add(user);
                //        }
                //    }
                //}

            }

            var result = teamWork
                .Where(ob => ob.User.Count > 1)
                .ToList();

            foreach (var team in teamWork)
            {
                Console.WriteLine(team.Team);
                for (int i = 0; i <team.User.Count; i++)
                {
                    if (i == 0)
                    {
                        Console.WriteLine($"- {team.User[0]}");
                    }
                    else
                    {
                        Console.WriteLine($"-- {team.User[i]}");
                    }
                }
            }

            var disband = teamWork
                .Where(ob => ob.User.Count < 2)
                .OrderBy(ob => ob.User)
                .ToList();

            Console.WriteLine("Teams to disband:");

            foreach (var kvp in disband)
            {
                Console.WriteLine(kvp);
            }
        }

        public static bool IsExistTeamAndUser(string user, string team, List<Teams> teamWork)
        {

            foreach (var currentTeam in teamWork)
            {
                if (currentTeam.Team == team)
                {
                    Console.WriteLine($"Team {team} was already created!");
                    return false;
                }
                else
                {
                    if (currentTeam.User.Contains(user))
                    {
                        Console.WriteLine($"{ user} cannot create another team!");
                        return false;
                    }   
                }
    
            }
            return true;

        }

    //    public static bool ChekTeamAndMember(string user, string team, List<Teams> teamWork)
    //    {
    //        foreach (var currentTeam in teamWork)
    //        {
    //            if (currentTeam.Team == team)
    //            {
    //                if (currentTeam.User.Contains(user))
    //                {
    //                    Console.WriteLine($"Member {user} cannot join team {team}!");
    //                    return false;
    //                }
                   
                    
    //            }
    //            else
    //            {
    //                Console.WriteLine($"Team { team} does not exist!");

    //                return false;
    //            }
    //        }
    //        return true;
           

    //    }
    //}
}
