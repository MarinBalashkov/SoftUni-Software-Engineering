using CodeFirst.Data;
using CodeFirst.Data.Models;
using Microsoft.EntityFrameworkCore;
using System;

namespace CodeFirst
{
    public class Program
    {
        public static void Main(string[] args)
        {
            using (var db = new StudenDbContext())
            {
                db.Database.EnsureCreated(); //Това само създава базата данни но не я променя

                db.Database.Migrate();

                var student = new Student()
                {
                    FirstName = "Ivan",
                    LastName = "Petrov",
                    Type = StudentType.Enrolled,
                    RegistrationDate = DateTime.Now
                };

                db.Students.Add(student);

                db.SaveChanges();
            }
        }
    }
}
