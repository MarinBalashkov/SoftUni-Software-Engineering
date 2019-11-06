

namespace Vehicle_Catalogue
{
    using System;
    using System.Collections.Generic;
    using System.Linq;

    public class Truck
    {
        public string Brand { get; set; }

        public string Model { get; set; }

        public int Weight { get; set; }
    }

    public class Car
    {
        public string Brand { get; set; }

        public string Model { get; set; }

        public int HorsePower { get; set; }
    }

    public class Catalog
    {
        public Catalog()
        {
            Truck = new List<Truck>();
            Car = new List<Car>();

        }

        public List<Truck> Truck { get; set; }

        public List<Car> Car { get; set; }
    }

    public class Program
    {
        static void Main(string[] args)
        {
            var catalog = new Catalog();

            while (true)
            {
                string input = Console.ReadLine();

                if (input == "end")
                {
                    break;
                }

                List<string> comands = input.Split("/").ToList();
                string type = comands[0];
                string brand = comands[1];
                string model = comands[2];
                
               

                if (type == "Car")
                {
                    int horsePower = int.Parse(comands[3]);

                    var car = new Car
                    {
                        Brand = brand,
                        Model = model,
                        HorsePower = horsePower

                    };
                    catalog.Car.Add(car);
                }
                else
                {
                    int weight = int.Parse(comands[3]);

                    var truck = new Truck
                    {
                        Brand = brand,
                        Model = model,
                        Weight = weight
                    };
                    catalog.Truck.Add(truck);
                }
            }

            var orderCar = catalog.Car.OrderBy(x => x.Brand);
            var orderTruck = catalog.Truck.OrderBy(x => x.Brand);

            foreach (var car in orderCar)
            {
                Console.WriteLine("Csrs:");
                Console.WriteLine($"{car.Brand}: {car.Model} - {car.HorsePower}hp");
            }
            foreach (var truck in catalog.Truck)
            {
                Console.WriteLine("Truck:");
                Console.WriteLine($"{truck.Brand}: {truck.Model} - {truck.Weight}kg");
            }
        }

    }
}
