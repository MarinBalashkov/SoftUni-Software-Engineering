namespace _01._Diagonal_Difference
{
    using System;
    using System.Linq;

    public class Program
    {
        public static void Main()
        {
            int matrixSize = int.Parse(Console.ReadLine());

            int[,] matrix = new int[matrixSize, matrixSize];

            for (int row = 0; row < matrixSize; row++)
            {
                var currentRow = Console.ReadLine()
                    .Split()
                    .Select(int.Parse)
                    .ToArray();

                for (int col = 0; col < matrixSize; col++)
                {
                    matrix[row, col] = currentRow[col];
                }
            }

            int primaryDiagonalSum = 0;

            int primaryCurrentRow = 0;
            int primaryCurrentCol = 0;

            while (true)
            {
                if (primaryCurrentRow >= matrix.GetLength(0) || primaryCurrentCol >= matrix.GetLength(1))
                {
                    break;
                }

                primaryDiagonalSum += matrix[primaryCurrentCol, primaryCurrentCol];

                primaryCurrentRow++;
                primaryCurrentCol++;
            }

            int secondaryDiagonalSum = 0;

            int secondaryCurrentRow = 0;
            int secondaryCurrentCol = matrix.GetLength(1) - 1;

            while (true)
            {
                if (secondaryCurrentRow >= matrix.GetLength(0) || secondaryCurrentCol < 0)
                {
                    break;
                }

                secondaryDiagonalSum += matrix[secondaryCurrentRow, secondaryCurrentCol];
                secondaryCurrentRow++;
                secondaryCurrentCol--;
            }

            int difference = Math.Abs(primaryDiagonalSum - secondaryDiagonalSum);

            Console.WriteLine(difference);
        }
    }
}
