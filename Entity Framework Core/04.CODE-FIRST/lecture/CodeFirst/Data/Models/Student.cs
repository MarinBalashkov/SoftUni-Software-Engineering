namespace CodeFirst.Data.Models
{
    using System;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;

    public class Student
    {
        [Required]
        [MaxLength(30)]
        [Column(Order = 0)]
        
        public int Id { get; set; }

        [MaxLength(30)]
        [Column(Order = 1)]
        public string FirstName { get; set; }

        [Required]// това е само са nullble type objects
        [MaxLength(30)]
        public string LastName { get; set; }

        [MaxLength(30)]
        public string MiddleName { get; set; }

        public int Age { get; set; }// ako iskame da e null slagame ?
        public DateTime RegistrationDate { get; set; }

        public StudentType Type { get; set; }

        public int TownId { get; set; }

        public Town Town { get; set; }

    }
}
