using System;

namespace Data_Type_Finder
{
    class Program
    {
        static void Main(string[] args)
        {
            while (true)
            {
                string line = Console.ReadLine();

                if (line == "END")
                {
                    break;
                }

                bool isBoolean = bool.TryParse(line, out bool boolean);
                bool isInteger = int.TryParse(line, out int integer );
                bool isCharacter = char.TryParse(line, out char character);

                if (isBoolean)
                {
                    Console.WriteLine($"{boolean}is boolean type");
                }



                //.........
                //........
            }
        }
    }
}
