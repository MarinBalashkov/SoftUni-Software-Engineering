namespace _01.Train
{
    using System;
    using System.Linq;
    public class Program
    {
        public static void Main()
        {
            int n = int.Parse(Console.ReadLine());

            int[] wagons = new int[n];

            int sum = 0;

            for (int i = 0; i < wagons.Length; i++)
            {
                wagons[i] = int.Parse(Console.ReadLine());

                sum += wagons[i];

            }

            for (int i = 0; i < wagons.Length; i++)
            {
                Console.Write($"{wagons[i]} ");
            }

            Console.WriteLine();
            Console.WriteLine(sum);

        }
    }
}
