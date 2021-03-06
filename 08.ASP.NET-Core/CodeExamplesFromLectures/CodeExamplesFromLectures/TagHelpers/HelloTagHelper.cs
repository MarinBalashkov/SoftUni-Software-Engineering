using Microsoft.AspNetCore.Razor.TagHelpers;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CodeExamplesFromLectures.TagHelpers
{
    [HtmlTargetElement("h1", Attributes = "target-name")]
    public class HelloTagHelper: TagHelper
    {
        private const string Message = "Hello, {0}";
        public string TargetName { get; set; }
        public override void Process(TagHelperContext context, TagHelperOutput output)
        {
            string formattedMessage = string.Format(Message, TargetName);
            output.Content.SetContent(formattedMessage);
            base.Process(context, output);
        }
    }
}
