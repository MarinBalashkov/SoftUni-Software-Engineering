using System;
using System.ComponentModel.DataAnnotations;
using System.Globalization;

namespace CodeExamplesFromLectures.ModelValidationAttributes
{
    public class IsBefore : ValidationAttribute
    {
        private const string DateTimeFormat = "dd/MM/yyyy";
        private readonly DateTime date;

        public IsBefore(string dateInput)
        {
            this.date = DateTime.ParseExact(dateInput, DateTimeFormat, CultureInfo.InvariantCulture);
        }

        protected override ValidationResult IsValid(object value, ValidationContext validationContext)
        {
            if ((DateTime)value >= this.date) return new ValidationResult(this.ErrorMessage);
            return ValidationResult.Success;
        }
    }

}
