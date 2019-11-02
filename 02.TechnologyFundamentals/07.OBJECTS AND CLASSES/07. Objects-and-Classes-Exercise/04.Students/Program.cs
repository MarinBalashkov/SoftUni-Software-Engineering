

namespace _04.Students
{
    using System;
    using System.Collections.Generic;
    using System.Linq;
    public class Students
    {
        public Students(string fitsrName, string lastName, double grade)
        {
            this.FirsName = fitsrName;
            this.LastName = lastName;
            this.Grade = grade;

        }

        public string FirsName { get; set; }
        public string LastName { get; set; }
        public double Grade { get; set; }

        //дава точен формат за директно принтиране на обекта

        public override string ToString()
        {
            return $"{FirsName} {LastName}: {Grade:f2}";
        }
    }
    public class Program
    {
        public static void Main()
        {
            int n = int.Parse(Console.ReadLine());

            var listOfStudents = new List<Students>();

            for (int i = 0; i < n; i++)
            {
                List<string> inputStudent = Console.ReadLine()
                    .Split()
                    .ToList();
                string firstName = inputStudent[0];
                string lastName = inputStudent[1];
                double grade = double.Parse(inputStudent[2]);

                var student = new Students(firstName, lastName, grade);

                listOfStudents.Add(student);
            }

            var orderedListOfStudents = listOfStudents
                .OrderByDescending(x => x.Grade)
                .ToList();

            foreach (var student in orderedListOfStudents)
            {
                Console.WriteLine(student);
            }

        }
    }
}
