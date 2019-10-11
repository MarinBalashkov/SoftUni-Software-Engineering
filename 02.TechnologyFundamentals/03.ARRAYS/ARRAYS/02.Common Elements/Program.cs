using System;

namespace _02.Common_Elements
{
    class Program
    {
        static void Main(string[] args)
        {
            string[] firstText = Console.ReadLine().Split();
            string[] secondText = Console.ReadLine().Split();


            for (int i = 0; i < secondText.Length; i++)
            {
                for (int j = 0; j < firstText.Length; j++)
                {
                    if (secondText[i] == firstText[j])
                    {
                        Console.Write($"{secondText[i]} ");
                    }
                }
            }
        }
    }
}
