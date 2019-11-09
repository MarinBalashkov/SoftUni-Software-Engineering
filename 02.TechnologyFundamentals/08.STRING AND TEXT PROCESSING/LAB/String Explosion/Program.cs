using System;
using System.Collections.Generic;
using System.Linq;

namespace String_Explosion
{
    class Program
    {
        static void Main(string[] args)
        {
            string ExplosionString = Console.ReadLine();

            int newStartIndex = 0;
            int leftStreight = 0;
            

            while (true)
            {
                
                int startBombIndex = ExplosionString.IndexOf(">", newStartIndex);

                int bombStreight = 0;

                if (char.IsLetter(ExplosionString[startBombIndex + 1]))
                {
                    break;
                }
                else
                {
                    char number = ExplosionString[startBombIndex +1];
                    bombStreight = int.Parse(number.ToString());
                    bombStreight += leftStreight;

                }
                int removedStreight = bombStreight;

                for (int i = startBombIndex +1; i < startBombIndex +1 + bombStreight; i++)
                {
                    char currentChar = ExplosionString[i];
                    if (currentChar == '>')
                    {
                        removedStreight = i - startBombIndex -1;
                    }
                }
                ExplosionString = ExplosionString.Remove(startBombIndex +1, removedStreight);

                leftStreight = bombStreight - removedStreight;
                newStartIndex = startBombIndex + 1;

            }

            Console.WriteLine(ExplosionString);

            




            
        }
    }
}
