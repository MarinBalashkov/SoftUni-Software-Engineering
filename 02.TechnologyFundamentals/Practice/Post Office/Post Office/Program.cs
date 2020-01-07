using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Numerics;
using System.Text.RegularExpressions;

namespace ConsoleApp65
{


    class Program
    {
        static void Main(string[] args)
        {
            string input = Console.ReadLine();
            string[] split = input.Split('|');
            string firstWord = string.Empty;
            List<string> partTwo = new List<string>();
            var result = new Dictionary<char, int>();

            string firstPart = split[0];
            string diezRegex = @"#[A-Z]+#";
            string dolarRegex = @"\$[A-Z]+\$";
            string percentRegex = @"%[A-Z]+%";
            string starRegex = @"\*[A-Z]+\*";
            string andRegex = @"&[A-Z]+&";
            Regex diez = new Regex(diezRegex);
            Regex dolar = new Regex(dolarRegex);
            Regex percent = new Regex(percentRegex);
            Regex star = new Regex(starRegex);
            Regex and = new Regex(andRegex);

            if (diez.IsMatch(firstPart))
            {
                firstWord = diez.Match(firstPart).ToString();
            }
            else if (dolar.IsMatch(firstPart))
            {
                firstWord = dolar.Match(firstPart).ToString();
            }
            else if (percent.IsMatch(firstPart))
            {
                firstWord = percent.Match(firstPart).ToString();
            }
            else if (star.IsMatch(firstPart))
            {
                firstWord = star.Match(firstPart).ToString();
            }
            else if (and.IsMatch(firstPart))
            {
                firstWord = and.Match(firstPart).ToString();
            }

            string secondPart = split[1];


            for (int i = 0; i < secondPart.Length - 4; i++)
            {
                string numbers = string.Empty;
                if (char.IsNumber(secondPart[i]) && char.IsNumber(secondPart[i + 1]) && secondPart[i + 2] == ':' && char.IsNumber(secondPart[i + 3]) && char.IsNumber(secondPart[i + 4]))
                {
                    numbers = secondPart.Substring(i, 5);
                    partTwo.Add(numbers);
                }
            }

            for (int i = 0; i < partTwo.Count; i++)
            {
                int numberLength = 0;
                string[] numberSplit = partTwo[i].Split(':');

                int asciiCode = int.Parse(numberSplit[0]);
                char letter = (char)asciiCode;
                string wordLength = numberSplit[1];
                if (wordLength[0] == '0')
                {
                    numberLength = (int)Char.GetNumericValue(wordLength[1]);
                }
                else
                {
                    if (wordLength.Length >= 1 && wordLength.Length <= 20)
                    {
                        numberLength = int.Parse(wordLength);
                    }
                }

                if (firstWord.Contains(letter))
                {
                    result[letter] = numberLength;
                }

            }


            string[] thirdPart = split[2].Split();

            foreach (var word in thirdPart)
            {
                char firstLetter = word[0];
                foreach (var item in result)
                {
                    if (word.Length == item.Value + 1 && firstLetter == item.Key)
                    {
                        Console.WriteLine(word);
                    }
                }
            }


        }

    }
}