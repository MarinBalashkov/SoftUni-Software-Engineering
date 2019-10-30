

namespace A_Miner_Task
{
    using System;
    using System.Collections.Generic;
    using System.Linq;

    public class Program
    {
        public static void Main()
        {
            var result =new Dictionary<string, int>();

            while (true)
            {
                string resource = Console.ReadLine();

                if (resource == "stop")
                {
                    break;
                }

                int quantity = int.Parse(Console.ReadLine());

                
                    if (!result.ContainsKey(resource))
                    {
                        result[resource] = 0;
                    }

                    result[resource] += quantity;
                
            }

            foreach (var kvp in result)
            {
                Console.WriteLine($"{kvp.Key} -> {kvp.Value}");
            }
        }
    }
}
