

namespace Lists___exercise
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
                List<string> input = Console.ReadLine().Split(' ').ToList();

                if (input[0] == "End")
                {
                    break;
                }
                if (input[0] == "Add")
                {
                    numbers.Add(int.Parse(input[1]));

                }
                else if (input[0] == "Insert")
                {
                    int number = int.Parse(input[1]);
                    int index = int.Parse(input[2]);

                    if (index > numbers.Count || index <0)
                    {
                        Console.WriteLine("Invalid index");
                    }
                    else
                    {
                        numbers.Insert(index, number);
                    }

                }
                else if (input[0] == "Remove")
                {
                    int index = int.Parse(input[1]);
                    if (index > numbers.Count || index <0)
                    {
                        Console.WriteLine("Invalid index");
                    }
                    else
                    {
                        numbers.RemoveAt(index);
                    }
                }
                else if (input[0] == "Shift" && input[1] == "left")
                {
                    int count = int.Parse(input[2]);
                    int count1 = count % numbers.Count;

                    for (int i = 0; i < count % numbers.Count; i++)
                    {
                        int FisrsToLast = numbers[0];
                        numbers.RemoveAt(0);
                        numbers.Add(FisrsToLast);
                    }

                }
                else if (input[0] == "Shift" && input[1] == "right")
                {
                    int count = int.Parse(input[2]);

                    for (int i = 0; i < count % numbers.Count; i++)
                    {
                        int lastToFirst = numbers[numbers.Count - 1];
                        numbers.RemoveAt(numbers.Count -1);
                        numbers.Insert(0, lastToFirst);
                    }
                }
            }

            Console.WriteLine(string.Join(' ', numbers));
        }
    }
}
