

namespace leture
{
    using System;
    using System.Text;
    using System.Diagnostics;
    public class Program
    {


        public static void Main()
        {
            string some = "text" + true + 15;
            Stopwatch sw = new Stopwatch();
            sw.Start();
            sw.Stop();
            sw.Elapsed();

             StringBuilder result = new StringBuilder();


            for (int i = 0; i < 100000; i++)
            {
                result.Append(i);
            }
            Console.WriteLine(result.ToString());

           
            

            //string result = string.Empty;

            //for (int i = 0; i < 100000; i++)
            //{
            //    result += i.ToString();
            //}
            //Console.WriteLine(result);

        }

       

    }
}
