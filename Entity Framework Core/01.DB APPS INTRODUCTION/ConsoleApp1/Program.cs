using System;
using System.Data.SqlClient;// instalirame klienta

namespace ConsoleApp1
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var connection = new SqlConnection("Server=(local)\\SQLEXPRESS01;Database=SoftUni;Integrated Security=True;");

            connection.Open();

            //var firstName = "' OR 1=1 --";
            var firstName = "Kevin";

            using (connection)
            {
                var command = new SqlCommand(
                    $"SELECT * FROM Employees WHERE FirstName = @name AND Age = @age",
                    connection);

                command.Parameters.AddWithValue("@name", firstName);
                command.Parameters.AddWithValue("age", 5);

                //връща единична стоиност или първи ред пшърва колона 
                //    var result = command.ExecuteScalar();

                //    Console.WriteLine(result);
                //}


                //var reader = command.ExecuteReader();

                //using (reader)
                //{
                //    while (reader.Read())
                //    {
                //        Console.WriteLine(reader[0]);// nomera na kolonata
                //        Console.WriteLine(reader[1] + " " + reader[2]);
                //    }
                //}



                //command.ExecuteNonQuery();// ne vryshta rezultat polzwa se za CRUD





                //var reader = command.ExecuteReader();

                //using (reader)
                //{
                //    while (reader.Read())
                //    {
                //        var firstName = reader["FirstName"];
                //        var lastName = reader["LastName"];
                //        var title = reader["JobTitle"];

                //        var result = $"{firstName} {lastName} {title}";

                //        Console.WriteLine(result);
                //    }
                //}



                // да разгледам кои са стриимове и кои не 
               //IDisposable da razgledame koi go nasledqwat


                var reader = command.ExecuteReader();

                using (reader)
                {
                    while (reader.Read())
                    {
                        for (int i = 0; i < reader.FieldCount; i++)
                        {
                            Console.Write(reader[i] + " ");
                        }
                        Console.WriteLine();
                    }

                }


            }
        }
    }
}
