namespace SulsApp
{
    using Microsoft.EntityFrameworkCore;
    using SIS.HTTP;
    using SIS.MvsFramework;
    using SulsApp.Data;
    using System;
    using System.Collections.Generic;
    using System.Text;
    public class Startup : IMvcApplication
    {
        public void Configure(IList<Route> routeTable)
        {
            var db = new ApplicationDbContext();
            db.Database.Migrate();
        }

        public void ConfigureServices()
        {

        }
    }
}
