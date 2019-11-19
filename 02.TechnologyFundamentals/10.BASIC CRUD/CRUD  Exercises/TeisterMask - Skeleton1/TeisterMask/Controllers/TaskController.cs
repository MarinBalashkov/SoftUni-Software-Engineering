using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using TeisterMask.Data;
using TeisterMask.Models;

namespace TeisterMask.Controllers
{
    public class TaskController : Controller
    {
        public IActionResult Index()
        {
            using (var db = new TeisterMaskDbContext())
            {
                var allTasks = db.Tasks.ToList();
                return View(allTasks);

            }
        }

        [HttpGet]
        public IActionResult Create()
        {
            return View();
        }

        [HttpPost]
        public IActionResult Create(Task newTask)
        {
            if (!ModelState.IsValid)
            {
                return RedirectToAction("Index");
            }

            using (var db = new TeisterMaskDbContext())
            {
                db.Tasks.Add(newTask);
                db.SaveChanges();
                return RedirectToAction("Index");
            }
        }

        [HttpGet]
        public IActionResult Edit(int id)
        {
            using (var db = new TeisterMaskDbContext())
            {
                var taskToEdit = db.Tasks.Find(id);
                if (taskToEdit == null)
                {
                    return RedirectToAction("Index");
                }

                return View(taskToEdit);
            }
        }

        [HttpPost]
        public IActionResult Edit(Task newTask)
        {
            if (!ModelState.IsValid)
            {
                return RedirectToAction("Index");
            }

            using (var db = new TeisterMaskDbContext())
            {
                db.Tasks.Update(newTask);
                db.SaveChanges();
                return RedirectToAction("Index");
            }
        }

        [HttpGet]
        public IActionResult Delete (int id)
        {
            using (var db = new TeisterMaskDbContext())
            {
                var taskToDelete = db.Tasks.Find(id);
                if (taskToDelete == null)
                {
                    return RedirectToAction("Index");
                }

                return View(taskToDelete);
            }
        }

        [HttpPost]
        public IActionResult Delete(Task newTask)
        {
            using (var db = new TeisterMaskDbContext())
            {
                db.Tasks.Remove(newTask);
                db.SaveChanges();

                return RedirectToAction("Index");
            }
        }
    }
}