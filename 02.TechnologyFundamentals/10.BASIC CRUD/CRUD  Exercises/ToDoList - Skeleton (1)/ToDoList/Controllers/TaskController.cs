using System;
using System.Collections.Generic;
using System.Linq;
using ToDoList.Data;
using ToDoList.Models;
using Microsoft.AspNetCore.Mvc;

namespace ToDoList.Controllers
{
    public class TaskController : Controller
    {
        public IActionResult Index()
        {
            using (var db = new Data.ToDoDbContext())
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
        public IActionResult Create(string title, string comments)
        {
            if (string.IsNullOrEmpty(title) || string.IsNullOrEmpty(comments))
            {
                return RedirectToAction("Index");
            }

            var task = new Task
            {
                Title = title,
                Comments = comments
            };

            using (var db = new ToDoDbContext())
            {
                db.Tasks.Add(task);
                db.SaveChanges();
            }
            return RedirectToAction("Index");
        }

        [HttpGet]
        public IActionResult Edit(int id)
        {
            using (var db = new ToDoDbContext())
            {
                var taskToEdit = db.Tasks.FirstOrDefault(t => t.Id == id);

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

            using (var db = new ToDoDbContext())
            {
                var taskToEdit = db.Tasks.FirstOrDefault(x => x.Id == newTask.Id);

                if (taskToEdit == null)
                {
                    return RedirectToAction("Index");
                }

                taskToEdit.Title = newTask.Title;
                taskToEdit.Comments = newTask.Comments;
                db.SaveChanges();
            }

            return RedirectToAction("Index");

        }

        [HttpGet]
        public IActionResult Details(int id)
        {
            using (var db = new ToDoDbContext())
            {
                var currentTask = db.Tasks.FirstOrDefault(x => x.Id == id);

                if (currentTask == null)
                {
                    return RedirectToAction("Index");
                }

                return View(currentTask);
            }
        }

        [HttpPost]
        public IActionResult Delete(int id)
        {
            using (var db = new ToDoDbContext())
            {
                var currentTask = db.Tasks.FirstOrDefault(t => t.Id == id);
                if (currentTask == null)
                {
                    return RedirectToAction("Index");
                }

                db.Tasks.Remove(currentTask);
                db.SaveChanges();


                return RedirectToAction("Index");

            }
            

        }
    }
}