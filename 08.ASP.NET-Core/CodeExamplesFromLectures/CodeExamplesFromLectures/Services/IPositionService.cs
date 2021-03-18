using Microsoft.AspNetCore.Mvc.Rendering;
using System.Collections.Generic;

namespace CodeExamplesFromLectures.Services
{
    public interface IPositionService
    {
        IEnumerable<SelectListItem> GetAll();
    }
}
