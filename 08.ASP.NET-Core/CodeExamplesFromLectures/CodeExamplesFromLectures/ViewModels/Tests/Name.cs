using CodeExamplesFromLectures.ModelValidationAttributes;
using System.ComponentModel.DataAnnotations;

namespace CodeExamplesFromLectures.ViewModels.Tests
{
    public class Name
    {
        [Required]
        [NameValidation]
        public string FirstName { get; set; }

        [Required]
        [NameValidation]
        public string LastName { get; set; }
    }
}
