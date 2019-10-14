using System;

namespace _01._Ages
{
    public class Program
    {
        public static void Main()
        {
            int Age = int.Parse(Console.ReadLine());

            string Person = null;

            if (Age >= 66)
            {
                Person = "elder";
            }
            else if (Age >= 20 && Age <= 65)
            {
                Person = "adult";
            }
            else if (Age >= 14 && Age <= 19)
            {
                Person = "teenager";
            }
            else if (Age >=3 && Age <= 13)
            {
                Person = "child";
            }
            else
            {
                Person = "baby";
            }

            Console.WriteLine(Person);










































            








        }
    }
}
