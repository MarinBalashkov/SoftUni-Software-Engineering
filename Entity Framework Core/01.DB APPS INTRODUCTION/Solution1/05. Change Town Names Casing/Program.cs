using System;
using System.Data.SqlClient;

namespace _05._Change_Town_Names_Casing
{
    class Program
    {
        const string conString = "Server=(local)\\SQLEXPRESS01;Database=MinionsDB;Integrated Security=True;";
        static void Main(string[] args)
        {
            string countryName = Console.ReadLine();

            var connestion = new SqlConnection(conString);

            connestion.Open();

            using (connestion)
            {
                var commandUpperNames = new SqlCommand(@"UPDATE Towns
                            SET Name = UPPER(Name)
                            WHERE CountryCode = (SELECT c.Id FROM Countries AS c WHERE c.Name = @countryName)", connestion);

                commandUpperNames.Parameters.AddWithValue("@countryName", countryName);

                try
                {
                    int changedTownsCount = (int)commandUpperNames.ExecuteScalar();

                    Console.WriteLine($"{changedTownsCount} town names were affected.");

                }
                catch (Exception e )
                {

                    Console.WriteLine(e.Message);
                }

                
            }
            
        }
    }
}
