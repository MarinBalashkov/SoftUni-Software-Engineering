

namespace Take.Skip_Rope
{
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Text;

   public class Program
    {
       public static void Main()
        {
            string message = Console.ReadLine();
            List<char> messegAsList = message.ToList();

            List<int> numbers = new List<int>();
            List<char> leters = new List<char>();
            

            for (int i = 0; i < messegAsList.Count; i++)
            {
                int characterAsNumber = (int)messegAsList[i];
                if (characterAsNumber > 47 && characterAsNumber < 58)
                {
                    int number = characterAsNumber - 48;
                    numbers.Add(number);
                    
                }
                else
                {
                    leters.Add(messegAsList[i]);
                }
            }

            List<int> taken = new List<int>();
            List<int> skip = new List<int>();
            


            for (int i = 0; i < numbers.Count; i++)
            {
                if (i % 2 == 0)
                {
                    taken.Add(numbers[i]);
                }
                else
                {
                    skip.Add(numbers[i]);
                }
            }
            string result = null;
            int startIndex = 0;

            for (int i = 0; i < taken.Count; i++)
            {
                int skipCount = skip[i];
                int takeCount = taken[i];
                result += new string(leters.Skip(startIndex).Take(takeCount).ToArray());
                startIndex += skipCount + takeCount;
            }
            Console.WriteLine(result);


        }
    }
}
