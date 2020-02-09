namespace _08._Bombs
{
using System;
    using System.Linq;

    public class Program
    {
        public static void Main()
        {
            int n = int.Parse(Console.ReadLine());

            int[][] matrix = new int[n][];

            for (int row = 0; row < n; row++)
            {
                var input = Console.ReadLine().Split(' ', StringSplitOptions.RemoveEmptyEntries).Select(int.Parse).ToArray();
                matrix[row] = input;
            }

            var bombLocations = Console.ReadLine().Split(" ", StringSplitOptions.RemoveEmptyEntries).ToArray();

            for (int i = 0; i < bombLocations.Length; i++)
            {
                var bombCoordinates = bombLocations[i].Split(',', StringSplitOptions.RemoveEmptyEntries).Select(int.Parse).ToArray();
                int rowBomb = bombCoordinates[0];
                int colBomb = bombCoordinates[1];
                int damage = matrix[rowBomb][colBomb];
                matrix[rowBomb][colBomb] = 0;

                if (n == 1)
                {
                    continue;
                }
                else if (rowBomb > 0 && rowBomb < n - 1 && colBomb > 0 && colBomb < n - 1)
                {
                    if (matrix[rowBomb - 1][colBomb - 1] > 0)
                    {
                        matrix[rowBomb - 1][colBomb - 1] -= damage;
                    }

                    if (matrix[rowBomb - 1][colBomb] > 0)
                    {
                        matrix[rowBomb - 1][colBomb] -= damage;
                    }

                    if (matrix[rowBomb - 1][colBomb + 1] > 0)
                    {
                        matrix[rowBomb - 1][colBomb + 1] -= damage;
                    }

                    if (matrix[rowBomb][colBomb - 1] > 0)
                    {
                        matrix[rowBomb][colBomb - 1] -= damage;
                    }

                    if (matrix[rowBomb][colBomb + 1] > 0)
                    {
                        matrix[rowBomb][colBomb + 1] -= damage;
                    }

                    if (matrix[rowBomb + 1][colBomb - 1] > 0)
                    {
                        matrix[rowBomb + 1][colBomb - 1] -= damage;
                    }

                    if (matrix[rowBomb + 1][colBomb] > 0)
                    {
                        matrix[rowBomb + 1][colBomb] -= damage;
                    }

                    if (matrix[rowBomb + 1][colBomb + 1] > 0)
                    {
                        matrix[rowBomb + 1][colBomb + 1] -= damage;
                    }
                }
                else if (rowBomb == 0 && colBomb > 0 && colBomb < n - 1)
                {
                    if (matrix[rowBomb][colBomb - 1] > 0)
                    {
                        matrix[rowBomb][colBomb - 1] -= damage;
                    }

                    if (matrix[rowBomb][colBomb + 1] > 0)
                    {
                        matrix[rowBomb][colBomb + 1] -= damage;
                    }

                    if (matrix[rowBomb + 1][colBomb - 1] > 0)
                    {
                        matrix[rowBomb + 1][colBomb - 1] -= damage;
                    }

                    if (matrix[rowBomb + 1][colBomb] > 0)
                    {
                        matrix[rowBomb + 1][colBomb] -= damage;
                    }

                    if (matrix[rowBomb + 1][colBomb + 1] > 0)
                    {
                        matrix[rowBomb + 1][colBomb + 1] -= damage;
                    }
                }
                else if (rowBomb == 0 && colBomb == 0)
                {

                    if (matrix[rowBomb][colBomb + 1] > 0)
                    {
                        matrix[rowBomb][colBomb + 1] -= damage;
                    }

                    if (matrix[rowBomb + 1][colBomb] > 0)
                    {
                        matrix[rowBomb + 1][colBomb] -= damage;

                    }

                    if (matrix[rowBomb + 1][colBomb + 1] > 0)
                    {
                        matrix[rowBomb + 1][colBomb + 1] -= damage;

                    }
                }
                else if (rowBomb == 0 && colBomb == n - 1)
                {
                    if (matrix[rowBomb][colBomb - 1] > 0)
                    {
                        matrix[rowBomb][colBomb - 1] -= damage;

                    }

                    if (matrix[rowBomb + 1][colBomb - 1] > 0)
                    {
                        matrix[rowBomb + 1][colBomb - 1] -= damage;
                    }

                    if (matrix[rowBomb + 1][colBomb] > 0)
                    {
                        matrix[rowBomb + 1][colBomb] -= damage;
                    }
                }
                else if (rowBomb == n - 1 && colBomb > 0 && colBomb < n - 1)
                {
                    if (matrix[rowBomb - 1][colBomb - 1] > 0)
                    {
                        matrix[rowBomb - 1][colBomb - 1] -= damage;
                    }

                    if (matrix[rowBomb - 1][colBomb] > 0)
                    {
                        matrix[rowBomb - 1][colBomb] -= damage;
                    }

                    if (matrix[rowBomb - 1][colBomb + 1] > 0)
                    {
                        matrix[rowBomb - 1][colBomb + 1] -= damage;
                    }

                    if (matrix[rowBomb][colBomb - 1] > 0)
                    {
                        matrix[rowBomb][colBomb - 1] -= damage;

                    }

                    if (matrix[rowBomb][colBomb + 1] > 0)
                    {
                        matrix[rowBomb][colBomb + 1] -= damage;
                    }
                }
                else if (rowBomb == n - 1 && colBomb == 0)
                {

                    if (matrix[rowBomb - 1][colBomb] > 0)
                    {
                        matrix[rowBomb - 1][colBomb] -= damage;
                    }

                    if (matrix[rowBomb - 1][colBomb + 1] > 0)
                    {
                        matrix[rowBomb - 1][colBomb + 1] -= damage;

                    }

                    if (matrix[rowBomb][colBomb + 1] > 0)
                    {
                        matrix[rowBomb][colBomb + 1] -= damage;
                    }
                }
                else if (rowBomb == n - 1 && colBomb == n - 1)
                {
                    if (matrix[rowBomb - 1][colBomb - 1] > 0)
                    {
                        matrix[rowBomb - 1][colBomb - 1] -= damage;
                    }

                    if (matrix[rowBomb - 1][colBomb] > 0)
                    {
                        matrix[rowBomb - 1][colBomb] -= damage;

                    }

                    if (matrix[rowBomb][colBomb - 1] > 0)
                    {
                        matrix[rowBomb][colBomb - 1] -= damage;
                    }
                }
                else if (rowBomb > 0 && rowBomb < n - 1 && colBomb == 0)
                {
                    if (matrix[rowBomb - 1][colBomb] > 0)
                    {
                        matrix[rowBomb - 1][colBomb] -= damage;

                    }

                    if (matrix[rowBomb - 1][colBomb + 1] > 0)
                    {
                        matrix[rowBomb - 1][colBomb + 1] -= damage;

                    }

                    if (matrix[rowBomb][colBomb + 1] > 0)
                    {
                        matrix[rowBomb][colBomb + 1] -= damage;

                    }

                    if (matrix[rowBomb + 1][colBomb] > 0)
                    {
                        matrix[rowBomb + 1][colBomb] -= damage;

                    }

                    if (matrix[rowBomb + 1][colBomb + 1] > 0)
                    {
                        matrix[rowBomb + 1][colBomb + 1] -= damage;

                    }
                }
                else if (rowBomb > 0 && rowBomb < n - 1 && colBomb == n - 1)
                {
                    if (matrix[rowBomb - 1][colBomb - 1] > 0)
                    {
                        matrix[rowBomb - 1][colBomb - 1] -= damage;
                    }

                    if (matrix[rowBomb - 1][colBomb] > 0)
                    {
                        matrix[rowBomb - 1][colBomb] -= damage;

                    }

                    if (matrix[rowBomb][colBomb - 1] > 0)
                    {
                        matrix[rowBomb][colBomb - 1] -= damage;

                    }

                    if (matrix[rowBomb + 1][colBomb - 1] > 0)
                    {
                        matrix[rowBomb + 1][colBomb - 1] -= damage;

                    }

                    if (matrix[rowBomb + 1][colBomb] > 0)
                    {
                        matrix[rowBomb + 1][colBomb] -= damage;

                    }
                }
            }

            int count = 0;
            int sum = 0;

            foreach (var row in matrix)
            {
                foreach (var item in row)
                {
                    if (item > 0)
                    {
                        count++;
                        sum += item;
                    }
                }
            }

            Console.WriteLine($"Alive cells: {count}");
            Console.WriteLine($"Sum: {sum}");
            Console.WriteLine(string.Join(Environment.NewLine, matrix
                .Select(r => string.Join(" ", r))));

        }
    }
}
