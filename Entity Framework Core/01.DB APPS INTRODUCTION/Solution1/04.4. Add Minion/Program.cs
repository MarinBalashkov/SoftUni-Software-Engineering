using System;
using System.Data.SqlClient;

namespace _04._4._Add_Minion
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
                string[] input = Console.ReadLine().Split(": ");

                string[] minionData = input[1].Split(new char[] {' '}, StringSplitOptions.RemoveEmptyEntries);

                var minionName = minionData[0];
                var minionAge = int.Parse(minionData[1]);
                var minionTownName = minionData[2];
                int townId = 0;
                int minionId = 0;

                string[] secondInput = Console.ReadLine().Split(": ");

                string[] villainData = secondInput[1].Split(new char[] { ' ' }, StringSplitOptions.RemoveEmptyEntries);

                var villainName = villainData[0];
                int villainId = 0;

                var chekTownId = new SqlCommand(@"SELECT Id FROM Towns WHERE Name = @townName", connection);
                chekTownId.Parameters.AddWithValue("@townName", minionTownName);

                var townIdChecker = chekTownId.ExecuteScalar();

                if (townIdChecker == null)
                {
                    var insertTown = new SqlCommand(@"INSERT INTO Towns (Name) VALUES (@townName)", connection);
                    insertTown.Parameters.AddWithValue("@townName", minionTownName);

                    insertTown.ExecuteNonQuery();

                    Console.WriteLine($"Town {minionTownName} was added to the database.");
                    townId = (int)chekTownId.ExecuteScalar();
                }
                else
                {
                    townId = (int)(townIdChecker);

                }

                var checkVillain = new SqlCommand(@"SELECT Id FROM Villains WHERE Name = @Name", connection);
                checkVillain.Parameters.AddWithValue("@Name", villainName);

                var villainCheker = checkVillain.ExecuteScalar();

                if (villainCheker == null)
                {
                    var insertVillain = new SqlCommand(@"INSERT INTO Villains (Name, EvilnessFactorId)  VALUES (@villainName, 4)", connection);

                    insertVillain.Parameters.AddWithValue("@villainName", villainName);

                    insertVillain.ExecuteNonQuery();

                    Console.WriteLine($"Villain {villainName} was added to the database.");

                    villainId = (int)checkVillain.ExecuteScalar();
                }
                else
                {
                    villainId = (int)villainCheker;

                }


                var checkMinion = new SqlCommand(@"SELECT Id FROM Minions WHERE Name = @Name", connection);
                checkMinion.Parameters.AddWithValue("@Name", minionName);

                if (checkMinion.ExecuteScalar() == null)
                {
                    var insertMinion = new SqlCommand(@"INSERT INTO Minions (Name, Age, TownId) VALUES (@nam, @age, @townId)", connection);
                    insertMinion.Parameters.AddWithValue("@nam", minionName);
                    insertMinion.Parameters.AddWithValue("@age", minionAge);
                    insertMinion.Parameters.AddWithValue("@townId", townId);

                    minionId = (int)checkMinion.ExecuteScalar();
                }
                else
                {
                    minionId = (int)checkMinion.ExecuteScalar();
                }

                var addMinion = new SqlCommand(@"INSERT INTO MinionsVillains (MinionId, VillainId) VALUES (@villainId, @minionId)", connection);
                addMinion.Parameters.AddWithValue("@villainId", villainId);
                addMinion.Parameters.AddWithValue("@minionId", minionId);

                addMinion.ExecuteNonQuery();

                Console.WriteLine($"Successfully added {minionName} to be minion of {villainName}.");
            }
        }
    }
}
