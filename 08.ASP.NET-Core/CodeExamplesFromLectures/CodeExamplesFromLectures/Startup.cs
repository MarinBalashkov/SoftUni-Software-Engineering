using CodeExamplesFromLectures.Data;
using CodeExamplesFromLectures.Filters;
using CodeExamplesFromLectures.Middlewares;
using CodeExamplesFromLectures.ModelBinders;
using CodeExamplesFromLectures.Services;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.UI;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CodeExamplesFromLectures
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddTransient<IPositionService, PositionService>();
            services.AddTransient<IYearsService, YearsService>();
            //services.AddTransient<IYearsService>((serviceProvider) => new YearsService(this.Configuration["YouTube:ApiKey"])); Inject service with parameters!!

            services.AddDbContext<ApplicationDbContext>(options =>
                options.UseSqlServer(
                    Configuration.GetConnectionString("DefaultConnection")));
            services.AddDefaultIdentity<IdentityUser>(options => options.SignIn.RequireConfirmedAccount = true)
                .AddEntityFrameworkStores<ApplicationDbContext>();

            services.AddControllersWithViews(configure =>
            {
                //options.Filters.Add(new MyAsyncActionFilter()); // instant global use
                configure.Filters.Add(typeof(MyAsyncActionFilter));// by type global use
                configure.ModelBinderProviders.Insert(0, new YearModelBinderProvider());// add custom ModelBinder
            });


            services.AddRazorPages();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
                app.UseDatabaseErrorPage();
            }
            else
            {
                //app.UseStatusCodePagesWithRedirects("Home/HttpError?statusCode={0}");

                app.UseExceptionHandler("/Home/Error");
                // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
                app.UseHsts();
            }


            //app.UseMiddleware<RedirectToGoogleifNotHttsMiddleware>();



            //app.Use( async (context, next) =>
            //{
            //    await context.Response.WriteAsync("BEFORE.....");
            //    if (!context.Request.IsHttps)
            //    {
            //        await next();
            //    }
            //    await context.Response.WriteAsync("...AFTER");
            //});
            //app.Use(async (context, next) =>
            //{
            //    await context.Response.WriteAsync("Hello from Middleware!");
            //    await next();
            //});
            //app.Run(async (context) =>
            //{
            //    await context.Response.WriteAsync("Go to HTTPS === final middleware");
            //});




            //app.Map("/healtcheck", app => 
            //    app.Run(async (context) =>
            //    {
            //        await context.Response.WriteAsync("I am alive");
            //    }));



            app.UseHttpsRedirection();
            app.UseStaticFiles();

            app.UseRouting();

            app.UseAuthentication();
            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllerRoute(
                    name: "default",
                    pattern: "{controller=Home}/{action=Index}/{id?}");

                //endpoints.MapControllerRoute(
                //    name: "blogUrl",
                //    pattern: "Blog/{slug}/{id:int}",
                //    defaults: new { controller = "Home", action = "Blog"}); //Blog/my-new-blog-post/2

                endpoints.MapRazorPages();
            });
        }
    }
}
