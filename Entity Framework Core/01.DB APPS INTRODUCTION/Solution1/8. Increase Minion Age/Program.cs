using System;
using System.Data.SqlClient;
using System.Linq;

namespace _8._Increase_Minion_Age
{
    class Program
    {
        private static string connectionString = "Server=(local)\\SQLEXPRESS01;Database=MinionsDB;Integrated Security=True;";

        private static SqlConnection connection = new SqlConnection(connectionString);

       
        static void Main(string[] args)
        {
            int[] ids = Console.ReadLine()
                .Split(new char[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
                .Select(int.Parse)
                .ToArray();

            connection.Open();

            using (connection)
            {
              

                try
                {
                    

                    for (int i = 0; i < ids.Length; i++)
                    {
                        var command = new SqlCommand();
                        command.Connection = connection;
                        
                        command.CommandText = @"UPDATE Minions
                    SET Name = UPPER(LEFT(Name, 1)) + SUBSTRING(Name, 2, LEN(Name)), Age += 1
                     WHERE Id = @Id";

                        command.Parameters.AddWithValue("@Id", ids[i]);

                        command.ExecuteNonQuery();
                    }


                    var commandd = new SqlCommand();
                    commandd.Connection = connection;
                        
                    commandd.CommandText = @"SELECT Name, Age FROM Minions";

                    var reader =  commandd.ExecuteReader();
                    using (reader)
                    {
                        while (reader.Read())
                        {
                            Console.WriteLine(reader["Name"] + " " + reader["Age"]);
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
