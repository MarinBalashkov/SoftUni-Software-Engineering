using System;
using System.Data.SqlClient;

namespace _03._Minion_Names
{
    class Program
    {
        const string conString = "Server=(local)\\SQLEXPRESS01;Database=MinionsDB;Integrated Security=True;";
        static void Main(string[] args)
        {
            var connection = new SqlConnection(conString);

            connection.Open();

            using (connection)
            {
                int input = int.Parse(Console.ReadLine());

                var commandVillain = new SqlCommand(@"SELECT Name FROM Villains WHERE Id = @Id", connection);

                commandVillain.Parameters.AddWithValue("@Id", input);


                var commandMinions = new SqlCommand(@" SELECT ROW_NUMBER() OVER (ORDER BY m.Name)                          as RowNum,
                                         m.Name, 
                                         m.Age
                                          FROM MinionsVillains AS mv
                                          JOIN Minions As m ON mv.MinionId = m.Id
                                          WHERE mv.VillainId = @Id
                                          ORDER BY m.Name", connection);

                commandMinions.Parameters.AddWithValue("@Id", input);

                try
                {
                    var readerVillain = commandVillain.ExecuteReader();
                    using (readerVillain)
                    {
                        while (readerVillain.Read())
                        {
                            Console.WriteLine($"{readerVillain["Name"]}");
                            
                        }
                    }

                    var readerMinions = commandMinions.ExecuteReader();
                    using (readerMinions)
                    {
                        while (readerMinions.Read())
                        {
                            Console.WriteLine($"{readerMinions["RowNum"]}. {readerMinions["Name"]} {readerMinions["Age"]}");
                        }
                    }
                }
                catch (Exception e )
                {

                    Console.WriteLine(e.Message);
                }
                
            }
        }
    }
}
