using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Forum.Data;
using Forum.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Forum.Controllers
{
    public class TopicController : Controller
    {
        private readonly ForumDbContext context;

        public TopicController(ForumDbContext context)
        {
            this.context = context;

        }

        public IActionResult Details(int? id)
        {
            if (id == null)
            {
                return RedirectToAction("Index", "Home");

            }

            var topic = this.context.Topics
                .Include(t => t.Author)
                .Include(t=>t.Category)
                .Include(t => t.Comments)
                .ThenInclude(c => c.Author)
                .Where(t => t.Id == id)
                .FirstOrDefault();
            if (topic == null)
            {
                return RedirectToAction("Index", "Home");

            }

            return View(topic);

        }
        [Authorize]
        [HttpGet]
        public IActionResult Create()
        {
            List<string> categories = context
                .Categories
                .Select(c => c.Name)
                .ToList();

            ViewData["CategoryNames"] = categories;
            return View();

        }

        [Authorize]
        [HttpPost]
        public IActionResult Create(string categoriName, Topic  topic)
        {
            if (ModelState.IsValid)
            {
                // add missing properties
                topic.CreatedDate = DateTime.Now;
                topic.LastUpdatedDate = DateTime.Now;

                var userId = this.context
                    .Users
                    .Where(u => u.UserName == User.Identity.Name)
                    .FirstOrDefault()
                    .Id;

                topic.AuthorId = userId;

                if (context.Categories.Any(c=>c.Name == categoriName))
                {
                    return View(topic);
                }
                
                int categoryId = context.Categories
                    .FirstOrDefault(c=>c.Name == categoriName)
                    .Id;
                topic.CategoryId = categoryId;
                // Add to db
                this.context.Topics.Add(topic);
                this.context.SaveChanges();

                return RedirectToAction("Index", "Home");
            }

            return View(topic);
        }

        [HttpGet]
        public IActionResult Delete(int? id)
        {
            if (id == null)
            {
                return RedirectToAction("Index", "Home");

            }

            Topic topic = this.context
                .Topics
                .Include(t => t.Author)
                .Where(t => t.Id == id)
                .FirstOrDefault();

            if (topic == null)
            {
                return RedirectToAction("Index", "Home");

            }


            return View(topic);

        }

        [HttpPost]
        [Authorize]
        public IActionResult Delete(int id)
        {

            Topic topic = this.context
                .Topics
                .Include(t => t.Author)
                .Where(t => t.Id == id)
                .FirstOrDefault();

            if (topic == null)
            {
                return RedirectToAction("Index", "Home");

            }

            if (topic.Author.UserName != User.Identity.Name)
            {
                return RedirectToAction("Index", "Home");

            }

            this.context.Topics.Remove(topic);
            this.context.SaveChanges();

            return RedirectToAction("Index", "Home");

        }

        [HttpGet]
        [Authorize]
        public IActionResult Edit(int? id)
        {
            if (id == null)
            {
                return RedirectToAction("Index", "Home");

            }

            Topic topic = this.context
                .Topics
                .Include(t => t.Author)
                .Include(t=>t.Category)
                .Where(t => t.Id == id)
                .FirstOrDefault();

            if (topic == null)
            {
                return RedirectToAction("Index", "Home");

            }

            List<string> categoryName = context
                .Categories
                .Select(c => c.Name)
                .ToList();

            ViewData["CategoryNames"] = categoryName;

            return View(topic);
        }

        [HttpPost]
        [Authorize]
        public IActionResult Edit(string categoriname, Topic topic)
        {
            if (ModelState.IsValid)
            {
                //get from db
                Topic dbTopic = this.context
                    .Topics
                    .Where(t => t.Id == topic.Id)
                    .FirstOrDefault();

                if (dbTopic == null)
                {
                    return RedirectToAction("Index", "Home");

                }
                //update properties

                dbTopic.Title = topic.Title;
                dbTopic.Description = topic.Description;
                dbTopic.LastUpdatedDate = DateTime.Now;

                int categoryId = context
                    .Categories
                    .SingleOrDefault(c => c.Name == categoriname)
                    .Id;
                topic.CategoryId = categoryId;
                //save db

                this.context.SaveChanges();
                return RedirectToAction("Index", "Home");
            }

            return View(topic);

        }
    }
}