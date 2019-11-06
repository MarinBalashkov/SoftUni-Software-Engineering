

namespace students
{
    using System;
    using System.Collections.Generic;
    using System.Linq;

    public class Student
    {
        public string FirstName { get; set; }

        public string LastName { get; set; }

        public int Age { get; set; }

        public string Hometown { get; set; }

    }

    public class Program
    {
        public static void Main()
        {

            var students = new List<Student>();

            while (true)
            {
                string input = Console.ReadLine();
                if (input == "end")
                {
                    break;
                }

                List<string> inputStudentNames = input
                    .Split(" ")
                    .ToList();

                string firstName = inputStudentNames[0];
                string lastName = inputStudentNames[1];
                int age = int.Parse(inputStudentNames[2]);
                string homeTown = inputStudentNames[3];

                if (IsStutedntExisting(students, firstName, lastName))
                {
                    var student = GetStudent(students, firstName, lastName);
                    student.FirstName = firstName;
                    student.LastName = lastName;
                    student.Age = age;
                    student.Hometown = homeTown;

                }
                else
                {
                    var student = new Student()
                    {
                        FirstName = firstName,
                        LastName = lastName,
                        Age = age,
                        Hometown = homeTown

                    };
                    students.Add(student);
                }
                

                
            }

            string cityName = Console.ReadLine();

            foreach (var student in students)
            {
                if (student.Hometown == cityName)
                {
                    Console.WriteLine($"{student.FirstName} {student.LastName} is {student.Age} years old.");
                }
            }
        }

        static bool IsStutedntExisting(List<Student> students, string firstName
            , string lastName)
        {
            foreach (var student in students)
            {
                if (student.FirstName == firstName && student.LastName == lastName)
                {
                    return true;
                }
            }
            return false;
        }

        static Student GetStudent(List<Student> students, string firsName, string lastName)
        {
            Student existingStudent = null;

            foreach (var studen in students)
            {
                if (studen.FirstName == firsName && studen.LastName == lastName)
                {
                    existingStudent = studen;
                }
            }
            return existingStudent;


        }
    }
}
