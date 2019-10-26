

namespace _02.ChangeList
{
    using System;
    using System.Collections.Generic;
    using System.Linq;

    public class Program
    {
       public static void Main()
        {
            List<int> numbers = Console.ReadLine()
                .Split(' ')
                .Select(int.Parse)
                .ToList();

            while (true)
            {
                string input = Console.ReadLine();

                if (input == "end")
                {
                    break;
                }

                List<string> manipulator = input.Split(' ').ToList();

                if (manipulator[0] == "Delete")
                {
                    int element = int.Parse(manipulator[1]);

                    for (int i = 0; i < numbers.Count; i++)
                    {
                        int digit = numbers[i];

                        if (digit == element)
                        {
                            numbers.RemoveAt(i);
                        }
                    }
                }

                else
                {
                    int element = int.Parse(manipulator[1]);
                    int position = int.Parse(manipulator[2]);

                    numbers.Insert(position, element);                        
                }
            }

            Console.WriteLine(string.Join(' ', numbers));
        }
    }
}
