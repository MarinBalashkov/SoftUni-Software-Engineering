using System;

namespace _03._Vacation
{
    public class Program
    {
        public static void Main()
        {
            int NumberOfPeople = int.Parse(Console.ReadLine());
            string GroupType = Console.ReadLine().ToLower();
            string Day = Console.ReadLine().ToLower();

            double TotalPrice = 0;

            if (Day == "friday")
            {
                if (GroupType == "students")
                {
                    if (NumberOfPeople >= 30)
                    {
                        TotalPrice = (NumberOfPeople*8.45)-((NumberOfPeople * 8.45)*0.15);
                    }
                    else
                    {
                        TotalPrice = (NumberOfPeople * 8.45);
                    }

                }
                else if (GroupType == "business")
                {
                    if (NumberOfPeople >= 100)
                    {
                        TotalPrice = (NumberOfPeople - 10) * 10.90;
                    }
                    else
                    {
                        TotalPrice = NumberOfPeople * 10.90;       
                    }

                }
                else if (GroupType == "regular")
                {
                    if (NumberOfPeople >= 10 && NumberOfPeople <= 20)
                    {
                       TotalPrice = (NumberOfPeople * 15) - ((NumberOfPeople * 15) * 0.15);
                    }
                    else
                    {
                        TotalPrice = NumberOfPeople * 15;
                    }

                }

            }
            else if (Day == "saturday")
            {
                if (GroupType == "students")
                {
                    if (NumberOfPeople >= 30)
                    {
                        TotalPrice = (NumberOfPeople * 9.80) - ((NumberOfPeople * 9.80) * 0.05);
                    }
                    else
                    {
                        TotalPrice = (NumberOfPeople * 9.80);
                    }

                }
                else if (GroupType == "business")
                {
                    if (NumberOfPeople >= 100)
                    {
                        TotalPrice = (NumberOfPeople - 10) * 15.60;
                    }
                    else
                    {
                        TotalPrice = NumberOfPeople * 15.60;
                    }

                }
                else if (GroupType == "regular")
                {
                    if (NumberOfPeople >= 10 && NumberOfPeople <= 20)
                    {
                        TotalPrice = (NumberOfPeople * 20) - ((NumberOfPeople * 20) * 0.05);
                    }
                    else
                    {
                        TotalPrice = NumberOfPeople * 20;
                    }

                }


            }
            else if (Day == "sunday")
            {
                if (GroupType == "students")
                {
                    if (NumberOfPeople >= 30)
                    {
                        TotalPrice = (NumberOfPeople * 10.46) - ((NumberOfPeople * 10.46) * 0.15);
                    }
                    else
                    {
                        TotalPrice = (NumberOfPeople * 10.46);
                    }

                }
                else if (GroupType == "business")
                {
                    if (NumberOfPeople >= 100)
                    {
                        TotalPrice = (NumberOfPeople - 10) * 16;
                    }
                    else
                    {
                        TotalPrice = NumberOfPeople * 16;
                    }

                }
                else if (GroupType == "regular")
                {
                    if (NumberOfPeople >= 10 && NumberOfPeople <= 20)
                    {
                        TotalPrice = (NumberOfPeople * 22.50) - ((NumberOfPeople * 22.50) * 0.05);
                    }
                    else
                    {
                        TotalPrice = NumberOfPeople * 22.50;
                    }

                }

            }


            Console.WriteLine($"Total price: {TotalPrice:f2}");


        }
    }
}
