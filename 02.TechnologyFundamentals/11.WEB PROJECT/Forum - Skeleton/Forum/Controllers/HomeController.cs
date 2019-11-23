using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Forum.Models;
using Forum.Data;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Authorization;

namespace Forum.Controllers
{
    public class HomeController : Controller
    {

        private readonly ForumDbContext context;

        public HomeController(ForumDbContext db)
        {
            this.context = db;
        }
        public IActionResult Index()
        {
            List<Topic> topics = this.context
                .Topics
                .Include(t => t.Author)
                .Include(t => t.Comments)
                .ThenInclude(c => c.Author)
                .OrderByDescending(t => t.CreatedDate)
                .ThenByDescending(t => t.LastUpdatedDate)
                .ToList();
            if (topics == null)
            {
                return RedirectToAction("Index", "Home");
            }

            List<Category> categories = context
                .Categories
                .ToList();
            ViewData["Categories"] = categories;

            return View(topics);
        }

        
    }
}
