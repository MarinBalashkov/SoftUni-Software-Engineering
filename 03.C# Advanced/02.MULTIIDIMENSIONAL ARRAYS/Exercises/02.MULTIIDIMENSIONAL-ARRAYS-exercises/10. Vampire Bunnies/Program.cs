namespace _10._Vampire_Bunnies
{
    using System;
    using System.Collections.Generic;
    using System.Linq;

    public class Program
    {
        public static void Main()
        {
            int[] matrixSize = Console.ReadLine().Split(' ', StringSplitOptions.RemoveEmptyEntries).Select(int.Parse).ToArray();

            int rows = matrixSize[0];
            int cols = matrixSize[1];

            var matrix = new char[rows][];

            int playerRow = 0;
            int playerCol = 0;

            for (int row = 0; row < rows; row++)
            {
                matrix[row] = Console.ReadLine().ToCharArray();

                if (matrix[row].Contains('P'))
                {
                    playerRow = row;
                    playerCol = Array.IndexOf(matrix[row], 'P');
                }
            }


            var commans = Console.ReadLine().ToCharArray();

            bool isDead = false;
            bool isWin = false;

            foreach (var command in commans)
            {
                if (command == 'U')
                {
                    if (playerRow - 1 < 0)
                    {
                        matrix[playerRow][playerCol] = '.';

                        isWin = true;
                    }
                    else if (matrix[playerRow - 1][playerCol] == 'B')
                    {
                        matrix[playerRow][playerCol] = '.';

                        playerRow--;
                        isDead = true;

                    }
                    else
                    {
                        matrix[playerRow][playerCol] = '.';
                        playerRow--;
                        matrix[playerRow][playerCol] = 'P';

                    }
                }
                else if (command == 'D')
                {
                    if (playerRow + 1 >= rows)
                    {
                        matrix[playerRow][playerCol] = '.';

                        isWin = true;
                    }
                    else if (matrix[playerRow + 1][playerCol] == 'B')
                    {
                        matrix[playerRow][playerCol] = '.';

                        playerRow++;
                        isDead = true;

                    }
                    else
                    {
                        matrix[playerRow][playerCol] = '.';
                        playerRow++;
                        matrix[playerRow][playerCol] = 'P';

                    }
                }
                else if (command == 'L')
                {
                    if (playerCol - 1 < 0)
                    {
                        matrix[playerRow][playerCol] = '.';

                        isWin = true;
                    }
                    else if (matrix[playerRow][playerCol - 1] == 'B')
                    {
                        matrix[playerRow][playerCol] = '.';

                        playerCol--;
                        isDead = true;

                    }
                    else
                    {
                        matrix[playerRow][playerCol] = '.';

                        playerCol--;
                        matrix[playerRow][playerCol] = 'P';

                    }
                }
                else if (command == 'R')
                {
                    if (playerCol + 1 >= cols)
                    {
                        matrix[playerRow][playerCol] = '.';

                        isWin = true;
                    }
                    else if (matrix[playerRow][playerCol + 1] == 'B')
                    {
                        matrix[playerRow][playerCol] = '.';

                        playerCol++;
                        isDead = true;

                    }
                    else
                    {
                        matrix[playerRow][playerCol] = '.';

                        playerCol++;
                        matrix[playerRow][playerCol] = 'P';

                    }
                }

                var bunniesPositions = new List<string>();

                for (int row = 0; row < rows; row++)
                {
                    for (int col = 0; col < cols; col++)
                    {
                        if (matrix[row][col] == 'B')
                        {
                            bunniesPositions.Add($"{row} {col}");
                        }
                    }
                }

                for (int i = 0; i < bunniesPositions.Count; i++)
                {
                    var currentBunny = bunniesPositions[i].Split(' ').Select(int.Parse).ToArray();

                    int bunnyRow = currentBunny[0];
                    int bunnyCol = currentBunny[1];

                    if (bunnyRow - 1 >= 0)
                    {
                        if (matrix[bunnyRow - 1][bunnyCol] == 'P')
                        {
                            isDead = true;
                            matrix[bunnyRow - 1][bunnyCol] = 'B';

                        }
                        else
                        {
                            matrix[bunnyRow - 1][bunnyCol] = 'B';
                        }
                    }

                    if (bunnyRow + 1 < rows)
                    {
                        if (matrix[bunnyRow + 1][bunnyCol] == 'P')
                        {
                            isDead = true;
                            matrix[bunnyRow + 1][bunnyCol] = 'B';

                        }
                        else
                        {
                            matrix[bunnyRow + 1][bunnyCol] = 'B';
                        }
                    }

                    if (bunnyCol - 1 >= 0)
                    {
                        if (matrix[bunnyRow][bunnyCol - 1] == 'P')
                        {
                            isDead = true;
                            matrix[bunnyRow][bunnyCol - 1] = 'B';
                        }
                        else
                        {
                            matrix[bunnyRow][bunnyCol - 1] = 'B';
                        }

                    }

                    if (bunnyCol + 1 < cols)
                    {
                        if (matrix[bunnyRow][bunnyCol + 1] == 'P')
                        {
                            isDead = true;
                            matrix[bunnyRow][bunnyCol + 1] = 'B';
                        }
                        else
                        {
                            matrix[bunnyRow][bunnyCol + 1] = 'B';
                        }
                    }
                }

                if (isDead == true || isWin == true)
                {
                    break;
                }
            }

            Console.WriteLine(string.Join(Environment.NewLine, matrix.Select(x => string.Join("", x))));

            if (isDead == true)
            {
                Console.WriteLine($"dead: {playerRow} {playerCol}");
            }
            else if (isWin == true)
            {
                Console.WriteLine($"won: {playerRow} {playerCol}");
            }
        }
    }
}
