﻿namespace CarManufacturer
{
    public class Car
    {
        private string make;
        private string model;
        private int year;
        public Car()
        {

        }

        public Car(string model, string make, int year) 
            :this()
        {
            Model = model;
            Make = make;
            Year = year;
        }

        public string Make { get; set; }
        public string Model { get; set; }
        public int Year { get; set; }

    }
}
