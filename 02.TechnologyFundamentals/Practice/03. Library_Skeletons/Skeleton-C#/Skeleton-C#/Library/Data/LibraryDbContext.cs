using Library.Models;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;


namespace Library.Data
{
    public class LibraryDbContext : DbContext
    {
        private const string ConnectionString = @"Server=HPCHEFONE\SQLEXPRESS;Database=LibreryDb;Integrated Security=True;";

        public DbSet<Book> Books { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer(ConnectionString);
        }
    }
}
