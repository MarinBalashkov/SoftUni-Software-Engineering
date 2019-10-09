using System;
using System.Numerics;
namespace Snowballs
{
    class Program
    {
        static void Main(string[] args)
        {

            int n = int.Parse(Console.ReadLine());

            BigInteger snowballValueMax = 0;
            int snowballSnowMax = 0;
            int snowballTimeMax = 0;
            int snowballQualityMax = 0;



            for (int i = 0; i < n; i++)
            {
                int snowballSnow = int.Parse(Console.ReadLine());
                int snowballTime = int.Parse(Console.ReadLine());
                int snowballQuality = int.Parse(Console.ReadLine());

                //double snowballValue = Math.Pow( snowballSnow / snowballTime , snowballQuality);
                 BigInteger snowballValue = BigInteger.Pow(snowballSnow / snowballTime, snowballQuality);


                //double snowballNumber = snowballSnow / snowballTime;

                //double snowballValue = 1;

                //for (int j = 0; j < snowballQuality; j++)
                //{
                //    snowballValue *= snowballNumber;
                //}

                if (snowballValue > snowballValueMax)
                {
                    snowballValueMax = snowballValue;
                    snowballSnowMax = snowballSnow;
                    snowballTimeMax = snowballTime;
                    snowballQualityMax = snowballQuality;

                }
            }

            Console.WriteLine($"{snowballSnowMax} : {snowballTimeMax} = {snowballValueMax} ({snowballQualityMax})");
        }
    }
}
