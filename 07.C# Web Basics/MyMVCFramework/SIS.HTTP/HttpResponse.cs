namespace SIS.HTTP
{
    using SIS.HTTP.Enums;
    using System;
    using System.Collections.Generic;
    using System.Text;

    public class HttpResponse
    {
        public HttpResponse(HttpResponseCode statusCode, byte[] body)
            :this()
        {
            this.StatusCode = statusCode;
            this.Body = body;
            if (body?.Length > 0)
            {
                this.Headers.Add(new Header("Content-Length", body.Length.ToString()));
            }
        }

        public HttpResponse()
        {
            this.Version = HttpVersionType.Http10;
            this.Headers = new List<Header>();
            this.Cookies = new List<Cookie>();
        }

        public HttpVersionType Version { get; set; }

        public HttpResponseCode StatusCode { get; set; }

        public IList<Header> Headers { get; set; }

        public IList<Cookie> Cookies { get; set; }

        public byte[] Body { get; set; }




    }
}
