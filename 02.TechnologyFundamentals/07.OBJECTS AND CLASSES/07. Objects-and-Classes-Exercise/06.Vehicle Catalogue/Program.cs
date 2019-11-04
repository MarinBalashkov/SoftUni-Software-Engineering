

namespace _06.Vehicle_Catalogue
{
    using System;
    using System.Collections.Generic;
    using System.Linq;

    

    public class Catalog
    {
        public Catalog(string type, string model, string color, double horsePower)
        {
            Type = type;
            Model = model;
            Color = color;
            HorsePower = horsePower;
        }
        public string Type { get; set; }
        public string Model { get; set; }
        public string Color { get; set; }
        public double HorsePower { get; set; }

        
    }

    
    public class Program
    {
        public static void Main()
        {
            var catalog = new List<Catalog>();

            while (true)
            {
                string input = Console.ReadLine();
                if (input == "End")
                {
                    break;
                }

                List<string> inputLines = input.Split().ToList();
                string typeOfVihicle = inputLines[0];
                string model = inputLines[1];
                string color = inputLines[2];
                double horsePower = double.Parse(inputLines[3]);

                if (typeOfVihicle == "car")
                {
                    string type = "Car";
                    var vehicle = new Catalog(type, model, color, horsePower);
                    catalog.Add(vehicle);
                }
                else
                {
                    string type = "Truck";
                    var vehicle = new Catalog(type, model, color, horsePower);
                    catalog.Add(vehicle);
                }
                
            }

            while (true)
            {
                string model = Console.ReadLine();
                if (model == "Close the Catalogue")
                {
                    break;
                }

                var vehicles = catalog.Where(x => x.Model == model).ToList();
                foreach (var vehicle in vehicles)
                {
                    Console.WriteLine($"Type: {vehicle.Type}");
                    Console.WriteLine($"Model: {vehicle.Model}");
                    Console.WriteLine($"Color: {vehicle.Color}");
                    Console.WriteLine($"Horsepower: {vehicle.HorsePower}");

                }



            }

            var carsCalalog = catalog.Where(x => x.Type == "Car").ToList();
            var trucksCatalog = catalog.Where(x => x.Type == "Truck").ToList();

            Console.WriteLine($"Cars have average horsepower of: {carsCalalog.Average(x => x.HorsePower):f2}.");
            Console.WriteLine($"Trucks have average horsepower of: {trucksCatalog.Average(x => x.HorsePower):f2}.");
        }
    }
}
