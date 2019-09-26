using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Sunglasses
{
    class Program
    {
        static void Main(string[] args)
        {
            int size = int.Parse(Console.ReadLine());

            string stars = new string('*', size * 2);
            string middlespaces = new string(' ', size);
            string bridge = new string('|', size);
            string lens = new string('/',2 *size - 2 );
            string border = stars + middlespaces + stars;
            string inside = $"*{lens}*"; 

            Console.WriteLine(border);
            for (int i = 1; i <= size - 2; i++)
            {
                if (!(i == (size -1) / 2))
                {
                    Console.WriteLine(inside + middlespaces +inside);
                }
                else
                {
                    Console.WriteLine(inside + bridge + inside);
                }
            }
            Console.WriteLine(border);
        }
    }
}
