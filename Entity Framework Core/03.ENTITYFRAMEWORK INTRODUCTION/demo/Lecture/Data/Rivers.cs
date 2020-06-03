using System;
using System.Collections.Generic;

namespace Lecture.Data
{
    public partial class Rivers
    {
        public Rivers()
        {
            CountriesRivers = new HashSet<CountriesRivers>();
        }

        public int Id { get; set; }
        public string RiverName { get; set; }
        public int Length { get; set; }
        public int DrainageArea { get; set; }
        public int AverageDischarge { get; set; }
        public string Outflow { get; set; }

        public virtual ICollection<CountriesRivers> CountriesRivers { get; set; }
    }
}
