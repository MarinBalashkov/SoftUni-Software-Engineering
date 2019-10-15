

namespace _05.Login
{
    using System;
    using System.Linq;

    public class Program
    {
       public static void Main()
        {

            //string userName = Console.ReadLine();

            //string userNamerReversed = null;

            //for (int i = userName.Length -1; i >= 0; i--)
            //{
            //    userNamerReversed += userName[i];
            //}

            //for (int i = 0; i < 4; i++)
            //{
            //    string password = Console.ReadLine();
            //    if (i == 3)
            //    {
            //        Console.WriteLine($"User {userName} blocked!");
            //    }

            //    else if (password == userNamerReversed)
            //    {
            //        Console.WriteLine($"User {userName} logged in");
            //        break;
            //    }
            //    else
            //    {
            //        Console.WriteLine($"Incorrect password. Try again.");
            //    }

            //}

            string userName = Console.ReadLine();

            var correctPassword = userName.ToCharArray().Reverse().ToString();


            Console.WriteLine(correctPassword.ToString());
        }
    }
}
