namespace _05._Snake_Moves
{
    using System;
    using System.Collections.Generic;
    using System.Linq;

    public class Program
    {
        public static void Main()
        {
            int[] matrixSize = Console.ReadLine()
                .Split(new char[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
                .Select(int.Parse)
                .ToArray();

            var snake = Console.ReadLine().ToCharArray();

            int rows = matrixSize[0];
            int cols = matrixSize[1];

            char[,] matrix = new char[rows, cols];

            Queue<char> snakeQueue = new Queue<char>(snake);

            for (int row = 0; row < rows; row++)
            {
                for (int col = 0; col < cols; col++)
                {
                    char charToAdd = snakeQueue.Dequeue();
                    matrix[row, col] = charToAdd;
                    snakeQueue.Enqueue(charToAdd);
                }
            }

            for (int row = 0; row < rows; row++)
            {
                for (int col = 0; col < cols; col++)
                {
                    Console.Write(matrix[row, col]);
                }

                Console.WriteLine();
            }
        }
    }
}
