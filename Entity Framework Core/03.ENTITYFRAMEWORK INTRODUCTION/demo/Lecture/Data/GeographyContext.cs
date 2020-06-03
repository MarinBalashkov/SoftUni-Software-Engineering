using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace Lecture.Data
{
    public partial class GeographyContext : DbContext
    {
        public GeographyContext()
        {
        }

        public GeographyContext(DbContextOptions<GeographyContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Continents> Continents { get; set; }
        public virtual DbSet<Countries> Countries { get; set; }
        public virtual DbSet<CountriesRivers> CountriesRivers { get; set; }
        public virtual DbSet<Currencies> Currencies { get; set; }
        public virtual DbSet<Mountains> Mountains { get; set; }
        public virtual DbSet<MountainsCountries> MountainsCountries { get; set; }
        public virtual DbSet<Peaks> Peaks { get; set; }
        public virtual DbSet<Rivers> Rivers { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. See http://go.microsoft.com/fwlink/?LinkId=723263 for guidance on storing connection strings.
                optionsBuilder.UseSqlServer("Server= DESKTOP-8R5RNRE\\SQLEXPRESS;Database=Geography;Integrated Security=True");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.HasAnnotation("ProductVersion", "2.2.6-servicing-10079");

            modelBuilder.Entity<Continents>(entity =>
            {
                entity.HasKey(e => e.ContinentCode);

                entity.Property(e => e.ContinentCode)
                    .HasMaxLength(2)
                    .IsUnicode(false)
                    .ValueGeneratedNever();

                entity.Property(e => e.ContinentName)
                    .IsRequired()
                    .HasMaxLength(50);
            });

            modelBuilder.Entity<Countries>(entity =>
            {
                entity.HasKey(e => e.CountryCode);

                entity.Property(e => e.CountryCode)
                    .HasMaxLength(2)
                    .IsUnicode(false)
                    .ValueGeneratedNever();

                entity.Property(e => e.Capital)
                    .IsRequired()
                    .HasMaxLength(30)
                    .IsUnicode(false);

                entity.Property(e => e.ContinentCode)
                    .IsRequired()
                    .HasMaxLength(2)
                    .IsUnicode(false);

                entity.Property(e => e.CountryName)
                    .IsRequired()
                    .HasMaxLength(45)
                    .IsUnicode(false);

                entity.Property(e => e.CurrencyCode)
                    .HasMaxLength(3)
                    .IsUnicode(false);

                entity.Property(e => e.IsoCode)
                    .IsRequired()
                    .HasMaxLength(3)
                    .IsUnicode(false);

                entity.HasOne(d => d.ContinentCodeNavigation)
                    .WithMany(p => p.Countries)
                    .HasForeignKey(d => d.ContinentCode)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_Countries_Continents");

                entity.HasOne(d => d.CurrencyCodeNavigation)
                    .WithMany(p => p.Countries)
                    .HasForeignKey(d => d.CurrencyCode)
                    .HasConstraintName("FK_Countries_Currencies");
            });

            modelBuilder.Entity<CountriesRivers>(entity =>
            {
                entity.HasKey(e => new { e.CountryCode, e.RiverId });

                entity.Property(e => e.CountryCode)
                    .HasMaxLength(2)
                    .IsUnicode(false);

                entity.HasOne(d => d.CountryCodeNavigation)
                    .WithMany(p => p.CountriesRivers)
                    .HasForeignKey(d => d.CountryCode)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_CountriesRivers_Countries");

                entity.HasOne(d => d.River)
                    .WithMany(p => p.CountriesRivers)
                    .HasForeignKey(d => d.RiverId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_CountriesRivers_Rivers");
            });

            modelBuilder.Entity<Currencies>(entity =>
            {
                entity.HasKey(e => e.CurrencyCode);

                entity.Property(e => e.CurrencyCode)
                    .HasMaxLength(3)
                    .IsUnicode(false)
                    .ValueGeneratedNever();

                entity.Property(e => e.Description)
                    .IsRequired()
                    .HasMaxLength(200);
            });

            modelBuilder.Entity<Mountains>(entity =>
            {
                entity.Property(e => e.MountainRange)
                    .IsRequired()
                    .HasMaxLength(50);
            });

            modelBuilder.Entity<MountainsCountries>(entity =>
            {
                entity.HasKey(e => new { e.MountainId, e.CountryCode })
                    .HasName("PK_MountainsContinents");

                entity.Property(e => e.CountryCode)
                    .HasMaxLength(2)
                    .IsUnicode(false);

                entity.HasOne(d => d.CountryCodeNavigation)
                    .WithMany(p => p.MountainsCountries)
                    .HasForeignKey(d => d.CountryCode)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_MountainsCountries_Countries");

                entity.HasOne(d => d.Mountain)
                    .WithMany(p => p.MountainsCountries)
                    .HasForeignKey(d => d.MountainId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_MountainsCountries_Mountains");
            });

            modelBuilder.Entity<Peaks>(entity =>
            {
                entity.Property(e => e.PeakName)
                    .IsRequired()
                    .HasMaxLength(50);

                entity.HasOne(d => d.Mountain)
                    .WithMany(p => p.Peaks)
                    .HasForeignKey(d => d.MountainId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_Peaks_Mountains");
            });

            modelBuilder.Entity<Rivers>(entity =>
            {
                entity.Property(e => e.Outflow)
                    .IsRequired()
                    .HasMaxLength(50);

                entity.Property(e => e.RiverName)
                    .IsRequired()
                    .HasMaxLength(50);
            });
        }
    }
}
