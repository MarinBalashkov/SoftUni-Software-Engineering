using Microsoft.AspNetCore.Mvc.Filters;
using System;

namespace CodeExamplesFromLectures.Filters
{
    public class MyAuthorizationFilterAttribute : Attribute, IAuthorizationFilter
    {
        public void OnAuthorization(AuthorizationFilterContext context)
        {
        }
    }
}
