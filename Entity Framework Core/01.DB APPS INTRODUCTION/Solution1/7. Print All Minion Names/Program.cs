using System;
using System.Collections.Generic;
using System.Data.SqlClient;

namespace _7._Print_All_Minion_Names
{
    public class Program
    {
        private static string connectionString = "Server=(local)\\SQLEXPRESS01;Database=MinionsDB;Integrated Security=True;";

        private static SqlConnection connection = new SqlConnection(connectionString);

        private static SqlTransaction transaction;
        public static void Main(string[] args)
        {
            connection.Open();

            using (connection)
            {
                transaction = connection.BeginTransaction();

                try
                {
                    SqlCommand command = new SqlCommand();
                    command.Connection = connection;
                    command.Transaction = transaction;
                    command.CommandText = @"SELECT Name FROM Minions";

                    List<string> names = new List<string>();

                    var reader = command.ExecuteReader();
                    using (reader)
                    {
                        while (reader.Read())
                        {
                            names.Add((string)reader["Name"]);
                            
                        }
                    }

                    for (int i = 0; i < names.Count + 1 / 2; i++)
                    {
                        Console.WriteLine(names[i]);
                        if (names.Count % 2 != 0 && i == (names.Count - 1) / 2)
                        {
                            break;
                        }
                        Console.WriteLine(names[names.Count - 1 - i]) ;
                    }

                    transaction.Commit();
                }
                catch (Exception e)
                {
                    try
                    {
                        Console.WriteLine(e.Message);
                        transaction.Rollback();

                    }
                    catch (Exception m)
                    {

                        Console.WriteLine(m.Message);
                    }

                }
            }
        }
    }
}
