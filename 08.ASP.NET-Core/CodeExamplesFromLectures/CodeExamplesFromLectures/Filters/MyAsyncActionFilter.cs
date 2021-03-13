using Microsoft.AspNetCore.Mvc.Filters;
using System.Threading.Tasks;

namespace CodeExamplesFromLectures.Filters
{
    public class MyAsyncActionFilter : IAsyncActionFilter
    {
        public async Task OnActionExecutionAsync(ActionExecutingContext context, ActionExecutionDelegate next)
        {
            // DO before the action executes
            var resultContext = await next();
            // DO after the action executes
            // resultContext.Result will be set

        }
    }
}
