﻿using System;

namespace Lab
{
   public class Program
    {
        public static void Main()
        {
            //⦁	Print Numbers in Reverse Order

            int n = int.Parse(Console.ReadLine());
            int[] numbers = new int[n];

            for (int i = 0; i < numbers.Length ; i++)
            {
                numbers[i] = int.Parse(Console.ReadLine());
            }
            for (int i = numbers.Length -1; i >=0; i--)
            {
                Console.WriteLine($"{numbers[i]} ");  
            }
            
        }
    }
}
