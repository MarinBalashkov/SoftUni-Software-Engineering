using Microsoft.AspNetCore.Mvc.Rendering;
using System.Collections.Generic;

namespace CodeExamplesFromLectures.Services
{
    public class PositionService : IPositionService
    {
        public IEnumerable<SelectListItem> GetAll()
        {
            return new List<SelectListItem>
            {
                new SelectListItem { Value = "1", Text = "Junior Developer"},
                new SelectListItem { Value = "2", Text = "Mid Level Developer"},
                new SelectListItem { Value = "3", Text = "Senior Developer"},

            };
        }
    }
}
