using CodeExamplesFromLectures.ModelBinders;
using CodeExamplesFromLectures.ModelValidationAttributes;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace CodeExamplesFromLectures.ViewModels.Tests
{
    public class TestsInputModel : IValidatableObject
    {
        //public int Id { get; set; }

        //[ModelBinder(typeof(YearModelBinder))]
        //public int Year { get; set; }

        //[Range(2000, int.MaxValue)]
        //public int[] Years { get; set; }


        public Name Name { get; set; }

        [DataType(DataType.Date)]
        [IsBefore("01/01/2000")]
        public DateTime DateOfBirth { get; set; }

        [Required]
        [NameValidation]
        public string University { get; set; }

        [EmailAddress]// use always with required
        [Required]
        public string Email { get; set; }

        [Required]
        [StringLength(10, MinimumLength = 10, ErrorMessage = "Must be 10 digits")]
        public string EGN { get; set; }

        [Display(Name = "Years of experience")]
        public int YearsOfExperience { get; set; }

        public CandidateType CandidateType { get; set; }

        public IEnumerable<SelectListItem> AllCandidateTypes { get; set; }

        public IFormFileCollection CV { get; set; }

        public IEnumerable<ValidationResult> Validate(ValidationContext validationContext)
        {
            if (int.Parse(this.EGN.Substring(0, 2)) != this.DateOfBirth.Year % 100)
            {
                yield return new ValidationResult("Year of birth and EGN not matching");
            }
        }
    }
}
