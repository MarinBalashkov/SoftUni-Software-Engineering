using Microsoft.AspNetCore.Http;
using System.Threading.Tasks;

namespace CodeExamplesFromLectures.Middlewares
{
    public class RedirectToGoogleifNotHttsMiddleware
    {
        private readonly RequestDelegate next;

        public RedirectToGoogleifNotHttsMiddleware(RequestDelegate next)
        {
            this.next = next;
        }

        public async Task InvokeAsync(HttpContext context)
        {
            if (!context.Request.IsHttps)
            {
                context.Response.StatusCode = 307;
                context.Response.Headers["Location"] = "https://google.com";
            }
            else
            {
                await this.next(context);
            }
        }
    }
}
