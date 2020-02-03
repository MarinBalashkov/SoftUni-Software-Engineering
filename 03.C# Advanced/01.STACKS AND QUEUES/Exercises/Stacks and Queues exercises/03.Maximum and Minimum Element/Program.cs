namespace _03.Maximum_and_Minimum_Element
{
    using System;
    using System.Collections.Generic;
    using System.Linq;

    public class Program
    {
        public static void Main()
        {
            int queries = int.Parse(Console.ReadLine());
            Stack<int> source = new Stack<int>();

            for (int index = 0; index < queries; ++index)
            {
                var list = Console.ReadLine().Split().Select(int.Parse).ToList();
                int command = list[0];

                switch (command)
                {
                    case 1:
                        int pushedhNumber = list[1];
                        source.Push(pushedhNumber);
                        continue;
                    case 2:
                        if (source.Any())
                        {
                            source.Pop();
                        }
                        continue;
                    case 3:
                        if (source.Any())
                        {
                            Console.WriteLine(source.Max());
                        }
                        continue;
                    case 4:
                        if (source.Any())
                        {
                            Console.WriteLine(source.Min());
                        }
                        continue;
                    default:
                        break;

                }
            }
            Console.WriteLine(string.Join(", ", (source)));
        }
    }
}
