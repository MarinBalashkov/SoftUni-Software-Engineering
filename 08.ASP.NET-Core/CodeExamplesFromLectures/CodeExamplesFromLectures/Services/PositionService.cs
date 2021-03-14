using System.Collections.Generic;

namespace CodeExamplesFromLectures.Services
{
    public class PositionService : IPositionService
    {
        public IEnumerable<string> GetAll()
        {
            return new List<string>()
            {
                "one", 
                "two",
                "three"
            };
        }
    }
}
