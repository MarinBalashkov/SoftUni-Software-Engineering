using SIS.HTTP.Enums;

namespace SIS.HTTP.Response
{
    public class StatusCodeResponse : HttpResponse
    {
        public StatusCodeResponse(HttpResponseCode statusCode)
        {
            this.StatusCode = statusCode;
        }
    }
}
