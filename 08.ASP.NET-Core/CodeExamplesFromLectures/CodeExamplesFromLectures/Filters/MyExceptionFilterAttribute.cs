using Microsoft.AspNetCore.Mvc.Filters;
using System.Threading.Tasks;

namespace CodeExamplesFromLectures.Filters
{
    public class MyExceptionFilterAttribute : ExceptionFilterAttribute
    {
        public override Task OnExceptionAsync(ExceptionContext context)
        {
            return base.OnExceptionAsync(context);
        }
    }
}
