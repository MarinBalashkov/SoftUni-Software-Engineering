using System;
using System.Collections.Generic;

namespace CodeExamplesFromLectures.Services
{
    public class YearsService : IYearsService
    {
        public IEnumerable<int> GetLastYeras(int count)
        {
            for (int year = DateTime.UtcNow.Year; year >= DateTime.UtcNow.Year - count; year--)
            {
                yield return year;
            }
        }
    }
}
