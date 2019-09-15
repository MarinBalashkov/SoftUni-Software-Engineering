using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Christmas_Tree
{
    class Program
    {
        static void Main(string[] args)
        {
            int size = int.Parse(Console.ReadLine());

            string mid = " | ";

            for (int row = 0; row <= size; row++)
            {
                

                for (int space = 0; space < size - row ; space++)
                {
                    Console.Write(" ");
                }
                for (int star = 0; star < row; star++)
                {
                    Console.Write("*");
                }
                Console.Write(mid);
                for (int star = 0; star < row; star++)
                {
                    Console.Write("*");
                }

                Console.WriteLine();  
            }

            for (int i = 0; i <=size; i++)
            {
                string spacess = new string(' ', size - i);
                string starss = new string('*', i);

                string rowsss = string.Format("{0}{1}{2}{1}", spacess, starss, mid);
                Console.WriteLine(rowsss);


            }







        }
    }
}
