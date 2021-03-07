using System.Collections;
using System.Collections.Generic;

namespace CodeExamplesFromLectures.Services
{
    public interface IYearsService
    {
        public IEnumerable<int> GetLastYeras(int count);
    }
}
