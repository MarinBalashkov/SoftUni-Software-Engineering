using System.Collections.Generic;

namespace CodeExamplesFromLectures.ViewModels.Home
{
    public class IndexViewModel
    {
        public int Year { get; set; }

        public string YoutubeApiKey { get; set; }
        public string Message { get; set; }


        public IEnumerable<string> Names { get; set; }

        public string UpperYear => this.YoutubeApiKey.ToUpper();

    }
}
