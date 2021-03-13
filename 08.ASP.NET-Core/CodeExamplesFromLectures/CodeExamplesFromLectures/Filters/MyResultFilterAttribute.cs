using CodeExamplesFromLectures.Services;
using Microsoft.AspNetCore.Mvc.Filters;

namespace CodeExamplesFromLectures.Filters
{
    public class MyResultFilterAttribute : ResultFilterAttribute
    {
        private readonly IYearsService yearsService;

        public MyResultFilterAttribute(IYearsService yearsService)
        {
            this.yearsService = yearsService;
        }
        public override void OnResultExecuting(ResultExecutingContext context)
        {
            base.OnResultExecuting(context);
        }

        public override void OnResultExecuted(ResultExecutedContext context)
        {
            context.HttpContext.Response.Headers.Add("X-Years", string.Join(", ", this.yearsService.GetLastYeras(4)));
            base.OnResultExecuted(context);
        }
    }
}
