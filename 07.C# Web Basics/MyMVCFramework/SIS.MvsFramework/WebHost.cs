namespace SIS.MvsFramework
{
    using SIS.HTTP;
    using SIS.HTTP.Enums;
    using SIS.HTTP.Logging;
    using SIS.HTTP.Response;
    using System;
    using System.Collections.Generic;
    using System.IO;
    using System.Text;
    using System.Threading.Tasks;

    public class WebHost
    {
        public static async Task StartAsync(IMvcApplication application)
        {
            IList<Route> routeTable = new List<Route>();

            //var routeTable = new List<Route>();
            routeTable.Add(new Route(HttpMethodType.Get, "/", Index));
            routeTable.Add(new Route(HttpMethodType.Get, "/users/login", Login));
            routeTable.Add(new Route(HttpMethodType.Post, "/users/login", DoLogin));
            routeTable.Add(new Route(HttpMethodType.Get, "/contact", Contact));


            //IServiceCollection serviceCollection = new ServiceCollection();
            //serviceCollection.Add<ILogger, ConsoleLogger>();

            //application.ConfigureServices(serviceCollection);
            application.Configure(routeTable);
            AutoRegisterStaticFilesRoutes(routeTable);
            //AutoRegisterActionRoutes(routeTable, application, serviceCollection);

            //var logger = serviceCollection.CreateInstance<ILogger>();
            var logger = new ConsoleLogger();
            //logger.Log("Registered routes:");
            //foreach (var route in routeTable)
            //{
            //    logger.Log(route.ToString());
            //}

            //logger.Log(string.Empty);
            //logger.Log("Requests:");
            var httpServer = new HttpServer(80, routeTable, logger);
            await httpServer.StartAsync();



        }

        private static void AutoRegisterStaticFilesRoutes(IList<Route> routeTable)
        {
            var staticFiles = Directory.GetFiles("wwwroot", "*", SearchOption.AllDirectories);
            foreach (var staticFile in staticFiles)
            {
                var path = staticFile.Replace("wwwroot", string.Empty).Replace("\\", "/");
                routeTable.Add(new Route(HttpMethodType.Get, path, (request) =>
                {
                    var fileInfo = new FileInfo(staticFile);
                    var contentType = fileInfo.Extension switch
                    {
                        ".css" => "text/css",
                        ".html" => "text/html",
                        ".js" => "text/javascript",
                        ".ico" => "image/x-icon",
                        ".jpg" => "image/jpeg",
                        ".jpeg" => "image/jpeg",
                        ".png" => "image/png",
                        ".gif" => "image/gif",
                        _ => "text/plain",
                    };

                    return new FileResponse(File.ReadAllBytes(staticFile), contentType);
                }));
            }
        }

        private static HttpResponse Contact(HttpRequest request)
        {
            return new HtmlResponse("<h1>contact</h1>");
        }

        public static HttpResponse Index(HttpRequest request)
        {
            //var username = request.SessionData.ContainsKey("Username") ? request.SessionData["Username"] : "Anonymous";
            return new HtmlResponse($"<h1>Home page. Hello, Marin</h1>");
        }

        public static HttpResponse Login(HttpRequest request)
        {
            request.SessionData["Username"] = "Pesho";
            return new HtmlResponse("<h1>login page</h1>");
        }

        public static HttpResponse DoLogin(HttpRequest request)
        {
            return new HtmlResponse("<h1>login page form</h1>");
        }
    }
}
