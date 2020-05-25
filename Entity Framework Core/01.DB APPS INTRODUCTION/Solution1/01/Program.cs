using System;
using System.Data.SqlClient;

namespace _01
{
    public class Program
    {
        const string conString = "Server=(local)\\SQLEXPRESS01;Database=MinionsDB;Integrated Security=True;";


        public static void Main(string[] args)
        {
            var conection = new SqlConnection(conString);

            conection.Open();

            using (conection)
            {
                var command = new SqlCommand(@" SELECT v.Name, COUNT(mv.VillainId) AS MinionsCount  
                  FROM Villains AS v 
                  JOIN MinionsVillains AS mv ON v.Id = mv.VillainId 
                  GROUP BY v.Id, v.Name 
                  HAVING COUNT(mv.VillainId) > 3 
                  ORDER BY COUNT(mv.VillainId)", conection);

                try
                {
                    var reader = command.ExecuteReader();

                    using (reader)
                    {
                        while (reader.Read())
                        {
                            Console.WriteLine($"{reader["Name"]} - {reader["MinionsCount"]}");
                        }
                    }
                }
                catch (Exception e)
                {

                    Console.WriteLine(e.Message);
                }
            }
        }
    }
}
