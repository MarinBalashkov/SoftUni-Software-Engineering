namespace SulsApp
{
    using SIS.HTTP;
    using SIS.HTTP.Enums;
    using SIS.HTTP.Logging;
    using SIS.HTTP.Response;
    using SIS.MvsFramework;
    using System;
    using System.Collections.Generic;
    using System.IO;
    using System.Threading.Tasks;

    public class Program
    {
        public static async Task Main()
        {
            await WebHost.StartAsync(new Startup());

        }
    }
}
