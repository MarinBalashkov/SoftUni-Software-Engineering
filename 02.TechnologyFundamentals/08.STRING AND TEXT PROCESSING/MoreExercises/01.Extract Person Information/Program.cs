

namespace _01.Extract_Person_Information
{
    using System;
    using System.Collections.Generic;
    using System.Linq;

    public class Program
    {
        public static void Main()
        {
            int n = int.Parse(Console.ReadLine());

            for (int i = 0; i < n; i++)
            {
                string input = Console.ReadLine();

                int nameStartIndex = input.IndexOf('@');
                int nameEndIndex = input.LastIndexOf('|');
                string name = input.Substring(nameStartIndex +1, nameEndIndex - nameStartIndex -1);

                int ageStarIndex = input.IndexOf('#');
                int ageEndIndex = input.LastIndexOf('*');
                string age = input.Substring(ageStarIndex +1, ageEndIndex - ageStarIndex -1);

                Console.WriteLine($"{name} is {age} years old.");
            }
        }
    }
}
