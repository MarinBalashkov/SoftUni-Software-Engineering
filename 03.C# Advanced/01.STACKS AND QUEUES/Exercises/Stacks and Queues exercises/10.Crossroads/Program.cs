namespace _10.Crossroads
{
    using System;
    using System.Collections.Generic;

    public class Program
    {
        public static void Main()
        {
            int greenLight = int.Parse(Console.ReadLine());
            int freeWindow = int.Parse(Console.ReadLine());

            Queue<string> cars = new Queue<string>();
            int carCounter = 0;

            while (true)
            {
                int currentGreenLight = greenLight;
                int allPassTime = currentGreenLight + freeWindow;

                string input = Console.ReadLine();
                if (input == "END")
                {
                    break;
                }
                else if (input != "green")
                {
                    cars.Enqueue(input);
                }
                else if (cars.Count != 0 && input == "green")
                {
                    while (true)
                    {
                        if (cars.Count == 0)
                        {
                            break;
                        }

                        string currentCar = cars.Dequeue();

                        Queue<char> passingCar = new Queue<char>(currentCar);

                        if (passingCar.Count > allPassTime)
                        {
                            for (int i = 0; i < allPassTime; i++)
                            {
                                passingCar.Dequeue();
                            }

                            Console.WriteLine("A crash happened!");
                            Console.WriteLine($"{currentCar} was hit at {passingCar.Dequeue()}.");
                            return;
                        }
                        else
                        {
                            if (passingCar.Count >= currentGreenLight)
                            {
                                carCounter++;
                                break;
                            }
                            else
                            {
                                carCounter++;
                                currentGreenLight -= passingCar.Count;
                                allPassTime -= passingCar.Count;
                            }
                        }
                    }
                }
            }
            Console.WriteLine("Everyone is safe.");
            Console.WriteLine($"{carCounter} total cars passed the crossroads.");

        }
    }
}
