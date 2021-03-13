using CodeExamplesFromLectures.Services;
using Microsoft.AspNetCore.Mvc.Filters;
using System;

namespace CodeExamplesFromLectures.Filters
{
    public class MyActionFilterAttribute : ActionFilterAttribute
    {
        private readonly string name;
        private readonly string value;

        public MyActionFilterAttribute(string name, string value)
        {
            this.name = name;
            this.value = value;
        }
        public void OnActionExecuting(ActionExecutingContext context)
        {
            context.HttpContext.Response.Headers.Add(name, value);
            Console.WriteLine("DO after the action executes");
        }

        public void OnActionExecuted(ActionExecutedContext context, IYearsService yearsService)
        {

            Console.WriteLine("DO before the action executes");
        }

    }
}
