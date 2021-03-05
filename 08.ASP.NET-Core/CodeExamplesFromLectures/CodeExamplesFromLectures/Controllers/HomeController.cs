using CodeExamplesFromLectures.Models;
using CodeExamplesFromLectures.ViewModels.Home;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;

namespace CodeExamplesFromLectures.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;
        private readonly IConfiguration configuration;

        public HomeController(ILogger<HomeController> logger, IConfiguration configuration)
        {
            _logger = logger;
            this.configuration = configuration;
        }

        public IActionResult Index()
        {
            //this.ViewData["name"] = "marin";
            //this.ViewBag["name"] = "BagName";
            //this.TempData["temp"] = "tempData"; // 1 request live

            var model = new IndexViewModel()
            {
                Year = DateTime.UtcNow.Year,
                YoutubeApiKey = this.configuration["YouTube:ApiKey"],
                Names = new List<string>() {"Marin", "Ivan"},
                Message = "<strong>Message<strong>",
            };

            return View(model);
        }

        public IActionResult Privacy()
        {
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
