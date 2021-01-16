namespace SIS.HTTP
{
    using System;
    using System.Collections.Generic;
    using System.Text;

    public class Cookies
    {
        public Cookies( string name, string value)
        {
            this.Name = name;
            this.Value = value;
        }

        public string Name { get; set; }

        public string Value { get; set; }
    }
}
