using System.Collections.Generic;

namespace CodeExamplesFromLectures.Services
{
    public interface IPositionService
    {
        IEnumerable<string> GetAll();
    }
}
