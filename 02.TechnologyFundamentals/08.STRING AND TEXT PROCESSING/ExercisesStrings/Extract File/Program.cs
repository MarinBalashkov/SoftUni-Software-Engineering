

namespace Extract_File
{
    using System;
    using System.Collections.Generic;
    using System.Linq;

    public class Program
    {
        public static void Main()
        {
            string path = Console.ReadLine();

            int subtrackindex = path.LastIndexOf("\\");
            string subtrackt = path.Substring(subtrackindex +1);

            var typeFile = subtrackt.Split('.').ToList();

            Console.WriteLine($"File name: {typeFile[0]}");
            Console.WriteLine($"File extension: {typeFile[1]}");
        }
    }
}
