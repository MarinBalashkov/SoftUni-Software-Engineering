

namespace Reverse_Strings
{
    using System;
    using System.Collections.Generic;
    using System.Linq;

    public class Program
    {
      public  static void Main()
        {
            while (true)
            {
                string inputString = Console.ReadLine();

                if (inputString == "end")
                {
                    break;
                }
                var reversedString = inputString.Reverse().ToList();

                string final = string.Join(string.Empty, reversedString);

                Console.WriteLine(final);


                //string result = null;

                //for (int i = 0; i < inputString.Length; i++)
                //{
                //    result += reversedString[i];
                //}

                //Console.WriteLine($"{inputString} = {result}");
            }
        }
    }
}
