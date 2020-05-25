using System;
using System.Data.SqlClient;
using System.Threading;

namespace _06
{
    class Program
    {
        private static string connectionString = "Server=DESKTOP-8R5RNRE\\SQLEXPRESS;Database=MinionsDB;Integrated Security=True;";

        private static SqlConnection connection = new SqlConnection(connectionString);

        private static SqlTransaction transaction;
        static void Main(string[] args)
        {
            int id = int.Parse(Console.ReadLine());

            connection.Open();

            using (connection)
            {
                transaction = connection.BeginTransaction();

                try
                {
                    SqlCommand command = new SqlCommand();
                    command.Connection = connection;
                    command.Transaction = transaction;
                    command.CommandText = "SELECT Name FROM Villains WHERE Id = @villainId";
                    command.Parameters.AddWithValue("@villainId", id);

                    object value = command.ExecuteScalar();

                    if (value == null)
                    {
                        throw new ArgumentException("No such villain was found.");
                    }

                    string villainName = (string)value;

                    command.CommandText = @"DELETE FROM MinionsVillains 
                                            WHERE VillainId = @villainId";

                    int minionsDeleted = command.ExecuteNonQuery();

                    command.CommandText = @"DELETE FROM Villains
                                           WHERE Id = @villainId";

                    command.ExecuteNonQuery();


                    //Thread.Sleep(100000);

                    transaction.Commit();

                    Console.WriteLine($"{villainName} was deleted.");
                    Console.WriteLine($"{minionsDeleted} minions were released.");
                }
                catch (ArgumentNullException ane)
                {

                    try
                    {
                        Console.WriteLine(ane.Message);
                        transaction.Rollback();
                    }
                    catch (Exception e)
                    {

                        Console.WriteLine(e.Message);
                    }
                }
                catch (Exception re)
                {
                    Console.WriteLine(re.Message);
                }
               
            }
        }
    }
}
