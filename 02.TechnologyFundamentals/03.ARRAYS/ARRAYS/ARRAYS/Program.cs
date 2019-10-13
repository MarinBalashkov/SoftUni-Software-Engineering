

namespace ARRAYS
{
    using System;
    using System.Linq;

    public class Program
    {
       public static void Main()
        {
            //int n = int.Parse(Console.ReadLine());
            //int[] numbers = new int[n];

            //for (int i = 0; i < numbers.Length; i++)
            //{

            //    numbers[i] = i;

            //}
            int n = int.Parse(Console.ReadLine());
            int[] numbers = new int[n];

            for (int i = 0; i < numbers.Length; i++)
            {
                numbers[i] = i;
            }





            //string[] days = { "Monday", "Tuesday"};

            //int day = int.Parse(Console.ReadLine());

            //if (day<1 ||day>7)
            //{
            //    Console.WriteLine("Invalid");
            //}
            //else
            //{
            //    Console.WriteLine(days[day - 1]);
            //}







            //int n = int.Parse(Console.ReadLine());

            //int[] numbers = new int[n];

            //for (int i = 0; i < n; i++)
            //{
            //    numbers[i] = int.Parse(Console.ReadLine());
            //}







            // 5 6 7 8 3 9 34
            //string text = Console.ReadLine();
            //string[] numbers = text.Split();

            //int[] parsedNumber = new int[numbers.Length];

            //for (int i = 0; i < numbers.Length; i++)
            //{
            //    parsedNumber[i] = int.Parse(numbers[i]);
            //}






            //// 5,6!,7, 8,3,9,34
            //int[] numbersss = Console.ReadLine()
            //    .Split(new char[] {'!', ',' }, StringSplitOptions.RemoveEmptyEntries)
            //    .Select(int.Parse)
            //    .ToArray();

            //for (int i = 0; i < numbersss.Length; i++)
            //{
            //    Console.Write(numbersss[i]);
            //}



            //int n = int.Parse(Console.ReadLine());

            //int[] numbers = new int[n];
            //for (int i = 0; i < n; i++)
            //{
            //    numbers[i] = int.Parse(Console.ReadLine());
            //}

            //for (int i = numbers.Length -1; i >= 0; i--)
            //{
            //    Console.WriteLine(numbers[i]);
            //}


            //double[] numbers = Console.ReadLine()
            //    .Split()
            //    .Select(double.Parse)
            //    .ToArray();


            ////for (int i = 0; i < numbers.Length; i++)
            ////{
            ////    double originalNumber = numbers[i];
            ////    int roundNumber = (int)Math.Round(originalNumber, MidpointRounding.AwayFromZero);

            ////    Console.WriteLine($"{originalNumber} => {roundNumber}");
            ////}


            //string result = string.Join(", ", numbers);
            //Console.WriteLine(result);






            string[] texts = Console.ReadLine().Split();

            for (int i = 0; i < texts.Length / 2; i++)
            {
                string firstText = texts[i];
                int ReverCounter = texts.Length - i - 1;

                texts[i] = texts[ReverCounter];
                texts[ReverCounter] = firstText;

            }

            texts = texts.Reverse().ToArray();








            int[] numbers = { 1, 2, 3, 5};
            foreach (var number in numbers)
            {
                Console.WriteLine(number);
            }







        }
    }
}
