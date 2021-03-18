using System.ComponentModel.DataAnnotations;

namespace CodeExamplesFromLectures.ModelValidationAttributes
{
    public class NameValidationAttribute : ValidationAttribute
    {
        protected override ValidationResult IsValid(object value, ValidationContext validationContext)
        {
            string valueAsString = value as string;
            if (!char.IsUpper(valueAsString[0]))
            {
                return new ValidationResult("Name must start with uppercase character!");
            }

            return ValidationResult.Success;
        }
    }
}
