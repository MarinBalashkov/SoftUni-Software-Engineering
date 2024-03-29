﻿namespace SIS.HTTP
{
    using SIS.HTTP.Enums;
    using System;
    using System.Collections.Generic;
    using System.Text;

    public class Route
    {
        public Route(HttpMethodType httpMethod, string path, Func<HttpRequest, HttpResponse> action)
        {
            this.HttpMethod = httpMethod;
            this.Path = path;
            this.Action = action;
        }
        public string Path { get; set; }

        public HttpMethodType HttpMethod { get; set; }

        public Func<HttpRequest, HttpResponse> Action { get; set; }

        public override string ToString()
        {
            return $"{this.HttpMethod} => {this.Path}";
        }
    }
}
