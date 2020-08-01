using JetBrains.Annotations;
using Microsoft.EntityFrameworkCore;
using P03_SalesDatabase.Data.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace P03_SalesDatabase.Data
{
    public class SalesContext : DbContext
    {
        public SalesContext()
        {

        }
        public SalesContext( DbContextOptions options) 
            : base(options)
        {
        }

        public DbSet<Product> Products { get; set; }

        public DbSet<Customer> Customers { get; set; }

        public DbSet<Store> Stores { get; set; }

        public DbSet<Sale> Sales { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
                optionsBuilder.UseSqlServer(Configuration.ConnectionString);
            }
            base.OnConfiguring(optionsBuilder);
        }



        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder
                .Entity<Product>(entity =>
                {
                    entity.HasKey(e => e.ProductId);

                    entity
                    .Property(e => e.Name)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(true);

                    entity
                    .Property(e => e.Quantity)
                    .IsRequired(true);


                    entity
                    .Property(e => e.Price)
                    .IsRequired(true);

                    entity
                    .Property(e => e.Description)
                    .HasMaxLength(250)
                    .HasDefaultValue("No description");

                    entity
                    .HasMany<Sale>(p => p.Sales)
                    .WithOne(s => s.Product)
                    .HasForeignKey(s => s.ProductId);

                });
                         
            modelBuilder
                .Entity<Customer>(entity =>
                {
                    entity.HasKey(e => e.CustomerId);

                    entity
                    .Property(e => e.Name)
                    .IsRequired()
                    .HasMaxLength(100)
                    .IsUnicode(true);

                    entity
                    .Property(e => e.Email)
                    .HasMaxLength(80)
                    .IsRequired(true)
                    .IsUnicode(false);

                    entity
                    .Property(e => e.CreditCardNumber)
                    .IsRequired(true)
                    .IsUnicode(false);

                    entity
                    .HasMany<Sale>(c => c.Sales)
                    .WithOne(s => s.Customer)
                    .HasForeignKey(s => s.CustomerId);


                });          

            modelBuilder
                .Entity<Store>(entity =>
                {
                    entity.HasKey(e => e.StoreId);

                    entity
                    .Property(e => e.Name)
                    .HasMaxLength(80)
                    .IsRequired(true)
                    .IsUnicode(true);


                });
          

            modelBuilder
                .Entity<Sale>(entity =>
                {
                    entity.HasKey(e => e.SaleId);

                    entity
                    .Property(e => e.Date)
                    .IsRequired()
                    .HasColumnType("DATETIME2")
                    .HasDefaultValueSql("GETDATE()");

                    entity
                        .HasOne(s => s.Store)
                        .WithMany(s => s.Sales)
                        .HasForeignKey(s => s.StoreId);
                });
        }
    }
}
