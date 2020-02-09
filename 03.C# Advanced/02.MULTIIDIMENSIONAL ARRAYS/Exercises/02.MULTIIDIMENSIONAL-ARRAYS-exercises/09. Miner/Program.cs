namespace _09._Miner
{
    using System;
    using System.Linq;

    public class Program
    {
        static void Main()
        {
            int n = int.Parse(Console.ReadLine());
            var commands = Console.ReadLine().Split(' ', StringSplitOptions.RemoveEmptyEntries).ToArray();

            char[][] matrix = new char[n][];

            for (int i = 0; i < n; i++)
            {
                var input = Console.ReadLine().Split(' ', StringSplitOptions.RemoveEmptyEntries).Select(char.Parse).ToArray();
                matrix[i] = input;
            }

            int minerRowPosition = 0;
            int minerColPosition = 0;
            int coals = 0;

            for (int row = 0; row < n; row++)
            {
                for (int col = 0; col < n; col++)
                {
                    if (matrix[row][col] == 's')
                    {
                        minerRowPosition = row;
                        minerColPosition = col;
                    }
                    else if (matrix[row][col] == 'c')
                    {
                        coals++;
                    }
                }
            }


            for (int i = 0; i < commands.Length; i++)
            {
                string command = commands[i];

                if (command == "left" && minerColPosition - 1 >= 0)
                {
                    minerColPosition--;
                    if (matrix[minerRowPosition][minerColPosition] == 'c')
                    {
                        coals--;
                        matrix[minerRowPosition][minerColPosition] = '*';

                        if (coals == 0)
                        {
                            Console.WriteLine($"You collected all coals! ({minerRowPosition}, {minerColPosition})");
                            return;
                        }
                    }
                    else if (matrix[minerRowPosition][minerColPosition] == 'e')
                    {
                        Console.WriteLine($"Game over! ({minerRowPosition}, {minerColPosition})");
                        return;
                    }

                }
                else if (command == "right" && minerColPosition + 1 <= n - 1)
                {
                    minerColPosition++;
                    if (matrix[minerRowPosition][minerColPosition] == 'c')
                    {
                        coals--;
                        matrix[minerRowPosition][minerColPosition] = '*';

                        if (coals == 0)
                        {
                            Console.WriteLine($"You collected all coals! ({minerRowPosition}, {minerColPosition})");
                            return;
                        }
                    }
                    else if (matrix[minerRowPosition][minerColPosition] == 'e')
                    {
                        Console.WriteLine($"Game over! ({minerRowPosition}, {minerColPosition})");
                        return;
                    }

                }
                else if (command == "up" && minerRowPosition - 1 >= 0)
                {
                    minerRowPosition--;
                    if (matrix[minerRowPosition][minerColPosition] == 'c')
                    {
                        coals--;
                        matrix[minerRowPosition][minerColPosition] = '*';

                        if (coals == 0)
                        {
                            Console.WriteLine($"You collected all coals! ({minerRowPosition}, {minerColPosition})");
                            return;
                        }
                    }
                    else if (matrix[minerRowPosition][minerColPosition] == 'e')
                    {
                        Console.WriteLine($"Game over! ({minerRowPosition}, {minerColPosition})");
                        return;
                    }

                }
                else if (command == "down" && minerRowPosition + 1 <= n - 1)
                {
                    minerRowPosition++;
                    if (matrix[minerRowPosition][minerColPosition] == 'c')
                    {
                        coals--;
                        matrix[minerRowPosition][minerColPosition] = '*';
                        if (coals == 0)
                        {
                            Console.WriteLine($"You collected all coals! ({minerRowPosition}, {minerColPosition})");
                            return;
                        }
                    }
                    else if (matrix[minerRowPosition][minerColPosition] == 'e')
                    {
                        Console.WriteLine($"Game over! ({minerRowPosition}, {minerColPosition})");
                        return;
                    }

                }
            }

            Console.WriteLine($"{coals} coals left. ({minerRowPosition}, {minerColPosition})");
        }
    }
}
