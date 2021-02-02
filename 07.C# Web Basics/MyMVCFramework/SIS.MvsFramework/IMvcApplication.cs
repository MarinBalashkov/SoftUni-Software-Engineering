namespace SIS.MvsFramework
{
    using SIS.HTTP;
    using System.Collections.Generic;

    public interface IMvcApplication
    {
        void Configure(IList<Route> routeTable);

        void ConfigureServices(); // IServiceCollection
    }
}
