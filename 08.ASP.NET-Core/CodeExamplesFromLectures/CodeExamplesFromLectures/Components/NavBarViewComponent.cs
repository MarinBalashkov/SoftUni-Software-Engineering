using Microsoft.AspNetCore.Mvc;
using CodeExamplesFromLectures.Services;
using CodeExamplesFromLectures.ViewModels.NavBar;

namespace CodeExamplesFromLectures.ViewComponents
{
    [ViewComponent(Name ="NavBar")]
    public class NavBarViewComponent: ViewComponent
    {
        private readonly IYearsService yearsService;

        public NavBarViewComponent(IYearsService yearsService)
        {
            this.yearsService = yearsService;
        }

        public IViewComponentResult Invoke(int count)
        {
            var viewModel = new NavBarViewModel()
            {
                Years = this.yearsService.GetLastYeras(count)
            };

            return this.View(viewModel);
        
        }
    }
}
