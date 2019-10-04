

namespace _07.Vending_Machine
{
    using System;
    public class Program
    {
        public static void Main()
        {

            decimal totalMoneyInsert = 0;
            while (true)
            {
                string input = Console.ReadLine();
                if (input == "Start")
                {
                    break;
                }

                decimal coins = decimal.Parse(input);
                if (coins == 0.1m || coins == 0.2m || coins == 0.5m || coins == 1.0m || coins ==2.0m)
                {
                    totalMoneyInsert += coins;
                }
                else
                {
                    Console.WriteLine($"Cannot accept {coins}");
                }
            }

            while (true)
            {
                string product = Console.ReadLine().ToLower();
                if (product == "end")
                {
                    break;
                }
                //Nuts”, “Water”, “Crisps”, “Soda”, “Coke”. 
                switch (product)
                {
                    case "nuts":
                        if (totalMoneyInsert < 2.0m)
                        {
                            Console.WriteLine($"Sorry, not enough money");
                        }
                        else
                        {
                            totalMoneyInsert -= 2.0m;
                            Console.WriteLine($"Purchased {product}");
                        }break;
                    case "water":
                        if (totalMoneyInsert < 0.7m)
                        {
                            Console.WriteLine($"Sorry, not enough money");
                        }
                        else
                        {
                            totalMoneyInsert -= 0.7m;
                            Console.WriteLine($"Purchased {product}");
                        }
                        break;
                    case "crisps":
                        if (totalMoneyInsert < 1.5m)
                        {
                            Console.WriteLine($"Sorry, not enough money");
                        }
                        else
                        {
                            totalMoneyInsert -= 1.5m;
                            Console.WriteLine($"Purchased {product}");
                        }
                        break;
                    case "soda":
                        if (totalMoneyInsert < 0.8m)
                        {
                            Console.WriteLine($"Sorry, not enough money");
                        }
                        else
                        {
                            totalMoneyInsert -= 0.8m;
                            Console.WriteLine($"Purchased {product}");
                        }
                        break;
                    case "coke":
                        if (totalMoneyInsert < 1.0m)
                        {
                            Console.WriteLine($"Sorry, not enough money");
                        }
                        else
                        {
                            totalMoneyInsert -= 1.0m;
                            Console.WriteLine($"Purchased {product}");
                        }
                        break;


                    default:Console.WriteLine($"Invalid product");
                        break;
                }

            }
            Console.WriteLine($"Change: {totalMoneyInsert:f2}");
        }
    }
}
