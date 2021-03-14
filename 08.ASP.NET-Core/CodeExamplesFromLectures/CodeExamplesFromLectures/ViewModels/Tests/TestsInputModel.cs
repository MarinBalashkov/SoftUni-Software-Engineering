using Microsoft.AspNetCore.Http;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace CodeExamplesFromLectures.ViewModels.Tests
{
    public class TestsInputModel
    {
        public int Id { get; set; }

        [Range(2000, int.MaxValue)]
        public int[] Years { get; set; }

        public Name Name { get; set; }

        public string University { get; set; }

        public CandidateType CandidateType { get; set; }

        public IEnumerable<string> AllCandidateTypes { get; set; }

        public IFormFileCollection CV { get; set; }

    }
}
