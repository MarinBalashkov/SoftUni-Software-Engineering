﻿using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using ToDoList.Data;
using ToDoList.Models;

namespace ToDoList.Controllers
{
    public class TaskController : Controller
    {
        public IActionResult Index()
        {
            using (var db = new ToDoDbContext())
            {
                var allTasks = db.Tasks.ToList();
                return View(allTasks);
            }
                
        }

        [HttpGet]
        public IActionResult Create()
        {
            return this.View();

        }

        [HttpPost]
        public IActionResult Create(string title, string comments)
        {
            if (string.IsNullOrEmpty(title) || string.IsNullOrEmpty(comments))
            {
                return RedirectToAction("Index");
            }

            Task task = new Task
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
        public IActionResult Edit(int Id)
        {
            using (var db = new ToDoDbContext())
            {
                var oldTask = db.Tasks.FirstOrDefault(x => x.Id == Id);

                if (oldTask == null)
                {
                    return RedirectToAction("Index");
                }

                return View(oldTask);
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
                
                var oldTask = db.Tasks.FirstOrDefault(x => x.Id == newTask.Id);

                if (oldTask == null)
                {
                    return RedirectToAction("Index");
                }

                oldTask.Title = newTask.Title;
                oldTask.Comments = newTask.Comments;

                db.SaveChanges();

                return RedirectToAction("Index");
            }

        }

        public IActionResult Details(int id)
        {
            using (var db = new ToDoDbContext())
            {
                var currentTask = db.Tasks.FirstOrDefault(t => t.Id == id);

                if (currentTask == null)
                {
                    return RedirectToAction("Index");
                }

                return View(currentTask);
            }

        }
        public IActionResult Delete(int id)
        {
            using (var db = new ToDoDbContext())
            {
                var task = db.Tasks.FirstOrDefault(t => t.Id == id);

                if (task == null)
                {
                    return RedirectToAction("Index");
                }

                db.Tasks.Remove(task);
                db.SaveChanges();

                return RedirectToAction("Index");
            }

        }
    }
}