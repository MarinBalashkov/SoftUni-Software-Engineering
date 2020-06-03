using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using Lecture.Data;
using Microsoft.EntityFrameworkCore;

namespace Lecture
{
    class Program
    {
        static void Main(string[] args)
        {
            Func<Rivers, bool> func = r => r.Outflow.StartsWith('1');//може да се извиква

            Expression<Func<Rivers, bool>> expre = r => r.Outflow.StartsWith('1'); //това е съдържанието на кода и не може да се извиква. парче код което можем да анализираме

            var body = expre

            using (var db = new GeographyContext())// всичко е живо до като е жив нашият контекс
            {
                var river = db.Rivers.FirstOrDefault();

                var etry = db.Entry(river);// чрез това разбираме какжо знае нашия контекс за обекта, от тук можем да следим дадени неща дали са променени или не 


                river.RiverName = "MonBlan";

                etry = db.Entry(river);

                db.SaveChanges();


                //db.AddRange(Enumerable.Range(0, 700).Select(i => new Rivers
                //{
                //    RiverName = i.ToString()
                //}));







                var mountains = db.Mountains
                        .Include(m => m.MountainsCountries)// ако не го инклуднем няма да я има информацията по долу, добра идея е да го избягваме максимално много 
                        .ToList();

                foreach (var mountain in mountains)
                {
                    Console.WriteLine(mountain.MountainRange);
                    foreach (var country in mountain.MountainsCountries)
                    {
                        Console.WriteLine(country.CountryCode);
                    }
                }



                var list = new List<Rivers>();

                list
                    .Where(r => r.Outflow.StartsWith('1'));

                var dblist = db.Rivers
                    .Where(r => r.Outflow.StartsWith('1'));

                // where е различен и иска различно нещо 




                var result = db.Peaks
                    .Where(p => p.PeakName.StartsWith("A"))// никога да не дърпаме всичко като не забравяме никога селекта точно това което ни трябва
                    .Where(p => p.Id > 3)
                    .Select(t => new {
                        name = t.PeakName
                    })// ako анонимен обект не ни върши работа си създаваме клас които описва резултата, ако имаме да инклудваме нещо го правим ж селекта
                    .ToList();// всичко ковто вика базата е последно 


            }
        }
    }
}
