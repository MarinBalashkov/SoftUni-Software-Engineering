﻿using JetBrains.Annotations;
using Microsoft.EntityFrameworkCore;
using P01_HospitalDatabase.Data.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace P01_HospitalDatabase.Data
{
    public class HospitalContext : DbContext
    {
        public DbSet<Patient> Patients { get; set; }
        public DbSet<Visitation> Visitations { get; set; }
        public DbSet<Diagnose> Diagnoses { get; set; }
        public DbSet<Medicament> Medicaments { get; set; }
        public DbSet<PatientMedicament> PatientsMedicaments { get; set; }
        public DbSet<Doctor> Doctors { get; set; }
        public HospitalContext()
        {
        }
        public HospitalContext(DbContextOptions options)
             : base(options)
        {
        }

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
            modelBuilder.Entity<Patient>(entity =>
            {
                entity.HasKey(p => p.PatientId);

                entity
                    .Property(p => p.FirstName)
                    .HasMaxLength(50)
                    .IsRequired(true)
                    .IsUnicode(true);

                entity
                    .Property(p => p.LastName)
                    .HasMaxLength(50)
                    .IsRequired(true)
                    .IsUnicode(true);

                entity
                    .Property(p => p.Address)
                    .HasMaxLength(250)
                    .IsRequired(true)
                    .IsUnicode(true);

                entity
                    .Property(p => p.Email)
                    .HasMaxLength(50)
                    .IsRequired(false)
                    .IsUnicode(false);

                entity
                    .Property(p => p.HasInsurance)
                    .IsRequired(true);
                    
            });

            modelBuilder.Entity<Visitation>(entity =>
            {
                entity.HasKey(v => v.VisitationId);

                entity
                    .Property(v => v.Date)
                    .HasColumnType("DATETIME2")
                    .IsRequired(true);

                entity
                    .Property(v => v.Comments)
                    .HasMaxLength(250)
                    .IsRequired(false)
                    .IsUnicode(true);

                entity
                    .HasOne(v => v.Patient)
                    .WithMany(p => p.Visitations)
                    .HasForeignKey(v => v.PatientId);

                entity
                    .Property(v => v.DoctorId)
                    .IsRequired(false);
            });

            modelBuilder.Entity<Diagnose>(entity =>
            {
                entity.HasKey(d => d.DiagnoseId);

                entity
                    .Property(d => d.Name)
                    .HasMaxLength(50)
                    .IsRequired(true)
                    .IsUnicode(true);

                entity
                    .Property(d => d.Comments)
                    .HasMaxLength(250)
                    .IsRequired(true)
                    .IsUnicode(true);

                entity
                    .HasOne(d => d.Patient)
                    .WithMany(p => p.Diagnoses)
                    .HasForeignKey(d => d.PatientId);
            });

            modelBuilder.Entity<Medicament>(entity =>
            {
                entity.HasKey(m => m.MedicamentId);

                entity
                    .Property(m => m.Name)
                    .HasMaxLength(50)
                    .IsRequired(true)
                    .IsUnicode(true);
               
            });

            modelBuilder.Entity<PatientMedicament>(entity =>
            {
                entity.HasKey(pm => new { pm.PatientId, pm.MedicamentId });

                entity
                    .Property(pm => pm.PatientId)
                    .IsRequired(true);

                entity
                    .Property(pm => pm.MedicamentId)
                    .IsRequired(true);

                entity
                    .HasOne(pm => pm.Patient)
                    .WithMany(p => p.Prescriptions)
                    .HasForeignKey(pm => pm.PatientId);

                entity
                    .HasOne(pm => pm.Medicament)
                    .WithMany(m => m.Prescriptions)
                    .HasForeignKey(pm => pm.MedicamentId);
            });

            modelBuilder.Entity<Doctor>(entity =>
            {
                entity.HasKey(d => d.DoctrorId);

                entity
                    .Property(d => d.Name)
                    .HasMaxLength(100)
                    .IsRequired(true)
                    .IsUnicode(true);

                entity
                    .Property(d => d.Specialty)
                    .HasMaxLength(100)
                    .IsRequired(true)
                    .IsUnicode(true);

                entity
                    .HasMany(d => d.Visitations)
                    .WithOne(v => v.Doctor)
                    .HasForeignKey(v => v.DoctorId);
            });
        }
    }
}
