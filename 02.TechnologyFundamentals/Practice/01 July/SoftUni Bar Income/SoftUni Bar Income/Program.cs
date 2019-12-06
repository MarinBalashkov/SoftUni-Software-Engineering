using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.RegularExpressions;

namespace SoftUni_Bar_Income
{
    class Program
    {
        static void Main()
        {

            double totalIncome = 0;

            while (true)
            {
                string input = Console.ReadLine();
                if (input == "end of shift")
                {
                    break;
                }

                string customer = null;
                string product = null;
                int count = 0;
                double price = 0;

                string firstPattern = $@"\%(?<customer>[A-Z][a-z]+)\%";
                Match firstMatch = Regex.Match(input, firstPattern);
                if (firstMatch.Success == true)
                {
                    customer = firstMatch.Groups["customer"].Value;
                }
                else
                {
                    continue;
                }

                string seconPattern = $@"<(?<product>[\w]+)>";
                Match secondMatch = Regex.Match(input, seconPattern);
                if (secondMatch.Success == true)
                {
                    product = secondMatch.Groups["product"].Value;
                }
                else
                {
                    continue;
                }

                string thirdPattern = $@"\|(?<count>[\d]+)\|";
                Match thirdMatch = Regex.Match(input, thirdPattern);
                if (thirdMatch.Success == true)
                {
                    count = int.Parse(thirdMatch.Groups["count"].Value);
                }
                else
                {
                    continue;
                }

                string fourthPattern = $@"[.0-9]+\$";
                Match fourthMatch = Regex.Match(input, fourthPattern);
                if (fourthMatch.Success == true)
                {
                    string match = fourthMatch.ToString();
                    price = double.Parse(match.Substring(0, match.Length -1));
                }
                else
                {
                    continue;
                }

                double totalPrice = count * price;
                totalIncome += totalPrice;
                Console.WriteLine($"{customer}: {product} - {totalPrice:F2}");
            }
            Console.WriteLine($"Total income: {totalIncome:F2}");
            
        }
    }
}
