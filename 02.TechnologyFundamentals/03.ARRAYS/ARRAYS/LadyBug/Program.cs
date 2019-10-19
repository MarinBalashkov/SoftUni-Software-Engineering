using System;
using System.Collections.Generic;
using System.Linq;

namespace LadyBug
{
    public class Program
    {
        public static void Main()
        {
            int fieldSize = int.Parse(Console.ReadLine());

            int[] field = new int[fieldSize];

            List<int> bugsPositions = Console.ReadLine()
                .Split(' ')
                .Select(int.Parse)
                .ToList();

            for (int i = 0; i < bugsPositions.Count; i++)
            {
                int positionWithBug = bugsPositions[i];
                if (positionWithBug < 0 || positionWithBug > field.Length -1)
                {
                    continue;
                }
                field[positionWithBug] = 1;
            }

            while (true)
            {
                string input = Console.ReadLine();
                if (input == "end")
                {
                    break;
                }

                List<string> InputLines = input
                    .Split(' ')
                    .ToList();

                int startIndex = int.Parse(InputLines[0]);
                string command = InputLines[1];
                int flyLength = int.Parse(InputLines[2]);

                if (command == "right")
                {
                    int endIndex = startIndex + flyLength;
                    
                        if (field[startIndex] != 0)
                        {
                            field[startIndex] = 0;
                        while (true)
                        {
                            if (endIndex > field.Length - 1)
                            {
                                break;
                            }
                            else
                            {
                                if (field[endIndex] != 0)
                                {
                                    endIndex += flyLength;
                                }
                                else
                                {
                                    field[endIndex] = 1;
                                    break;
                                }
                            }

                        }
                           
                        }
                    
                    
                }
                else
                {
                    int endIndex = startIndex - flyLength;

                    if (field[startIndex] != 0)
                    {
                        field[startIndex] = 0;
                        while (true)
                        {
                            if (endIndex < 0)
                            {
                                break;
                            }
                            else
                            {
                                if (field[endIndex] != 0)
                                {
                                    endIndex -= flyLength;
                                }
                                else
                                {
                                    field[endIndex] = 1;
                                    break;
                                }
                            }

                        }

                    }
                }

            }
            Console.WriteLine(string.Join(" ", field));



        }
    }
}
