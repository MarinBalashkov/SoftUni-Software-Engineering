using Microsoft.AspNetCore.Mvc.Filters;
using System;

namespace CodeExamplesFromLectures.Filters
{
    public class MyResourceFilterAttribute : Attribute, IResourceFilter
    {
        public void OnResourceExecuted(ResourceExecutedContext context)
        {
        }

        public void OnResourceExecuting(ResourceExecutingContext context)
        {
        }
    }
}
