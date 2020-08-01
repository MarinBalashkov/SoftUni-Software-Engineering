using System;
using System.Collections.Generic;
using System.Text;
using CodeFirst.Data.Models;
using Microsoft.EntityFrameworkCore;

namespace CodeFirst.Data
{
    public class StudenDbContext : DbContext
    {
        public DbSet<Student> Students { get; set; }

        public DbSet<Course> Courses { get; set; }

        public DbSet<Town> Towns { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
                optionsBuilder
                    .UseSqlServer(DataSettings.DefaultConection);
            }
        }

        //protected internal virtual void OnModelCreating(ModelBuilder modelBuilder)
        //{
        //    modelBuilder// това са същите кострейнти които задаваме през класа student кое от двете ще направим няма значение вършат една и съща работа. От тук най често ще сетваме връзките между таблиците 
        //        .Entity<Student>(entity =>
        //        {
        //            entity.HasKey(e => e.Id);
        //            entity.ToTable("Peshos");
        //            entity
        //            .Property(e => e.FirstName)
        //            .IsRequired()
        //            .HasMaxLength(30);
        //        });
        //}

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder
                .Entity<Student>()
                .HasOne(st => st.Town)
                .WithMany(t => t.Students)
                .HasForeignKey(st => st.TownId);
               

        }

    }
}
