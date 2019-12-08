using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Library.Data;
using Library.Models;
using Microsoft.AspNetCore.Mvc;

namespace Library.Controllers
{
    public class LibraryController : Controller
    {
        public IActionResult Index()
        {
            //TO DO
            using (var db = new LibraryDbContext())
            {
                var allBooks = db.Books.ToList();
                return View(allBooks);
            }
           
        }

        [HttpGet]
        public IActionResult Create()
        {
            //TO DO
            return this.View();

        }

        [HttpPost]
        public IActionResult Create(Book book)
        {
            //TO DO
            if (!ModelState.IsValid || book.Price < 1)
            {
                return RedirectToAction("Index");
            }

            using (var db = new LibraryDbContext())
            {
                db.Books.Add(book);
                db.SaveChanges();
            }
            return RedirectToAction("Index");
        }

        [HttpGet]
        public IActionResult Edit(int id)
        {
            //TO DO
            using (var db = new LibraryDbContext())
            {
                var bookToEdit = db.Books.Find(id);
                return View(bookToEdit);

            }
        }

        [HttpPost]
        public IActionResult Edit(Book book)
        {
            //TO DO

            if (!ModelState.IsValid || book.Price < 1)
            {
                return RedirectToAction("Index");
            }
            using (var db = new LibraryDbContext())
            {
                db.Books.Update(book);

                db.SaveChanges();

                return RedirectToAction("Index");

            }
        }

        [HttpGet]
        public IActionResult Delete(int id)
        {
            //TO DO
            using (var db = new LibraryDbContext())
            {
                var bookToDelete = db.Books.FirstOrDefault(x => x.Id == id);
                if (bookToDelete == null)
                {
                    return RedirectToAction("Index");
                }
                return View(bookToDelete);

            }
        }

        [HttpPost]
        public IActionResult Delete(Book book)
        {
            //TO DO
            using (var db = new LibraryDbContext())
            {
                var bookToDelete = db.Books.FirstOrDefault(x => x.Id == book.Id);
                if (bookToDelete == null)
                {
                    return RedirectToAction("Index");
                }

                db.Books.Remove(bookToDelete);
                db.SaveChanges();

                return RedirectToAction("Index");
            }
        }
    }
}