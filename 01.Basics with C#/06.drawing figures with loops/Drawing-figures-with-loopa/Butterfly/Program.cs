using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Butterfly
{
    class Program
    {
        static void Main(string[] args)
        {
            int size = int.Parse(Console.ReadLine());
            int figureWidth = 4 * size - 4;

            //Top part
            for (int rowNumber = 1; rowNumber <= size - 2; rowNumber++)
            {
                for (int i = 0; i < rowNumber; i++)
                {
                    Console.Write("*\\");
                }

                string spaces = new string(' ', figureWidth - rowNumber * 4);
                Console.Write(spaces);

                for (int i = 0; i < rowNumber; i++)
                {
                    Console.Write("/*");
                }

                Console.WriteLine();
            }

            //First row of middle part
            for (int column = 0; column < figureWidth / 2; column++)
            {
                Console.Write("\\/");
            }
            Console.WriteLine();

            //Repeating middle rows
            string middle = "*|**|*";
            int sideLength = (figureWidth - 6) / 2;
            string leftSide = new string('<', sideLength);
            string rightSide = new string('>', sideLength);
            string middleRow = leftSide + middle + rightSide;

            for (int row = 0; row < size / 2; row++)
            {
                Console.WriteLine(middleRow);
            }

            //Last row of middle part
            for (int column = 0; column < figureWidth / 2; column++)
            {
                Console.Write("/\\");
            }
            Console.WriteLine();

            //Bottom part
            for (int rowNumber = size - 2; rowNumber >= 1; rowNumber--)
            {
                for (int i = 0; i < rowNumber; i++)
                {
                    Console.Write("*/");
                }

                string spaces = new string(' ', figureWidth - rowNumber * 4);
                Console.Write(spaces);

                for (int i = 0; i < rowNumber; i++)
                {
                    Console.Write("\\*");
                }

                Console.WriteLine();
            }
        }
    }
}
