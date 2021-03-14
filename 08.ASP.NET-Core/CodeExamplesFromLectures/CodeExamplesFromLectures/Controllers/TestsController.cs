using CodeExamplesFromLectures.Services;
using CodeExamplesFromLectures.ViewModels.Tests;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.FileProviders;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

namespace CodeExamplesFromLectures.Controllers
{
    public class TestsController : Controller
    {
        private readonly IWebHostEnvironment env;
        private readonly IConfiguration config;
        private readonly IPositionService positionService;
        private IYearsService yearsService;

        public TestsController(IYearsService yearsService, IWebHostEnvironment env, IConfiguration config, IPositionService positionService)
        {
            this.yearsService = yearsService;
            this.env = env;
            this.config = config;
            this.positionService = positionService;
        }

        //public IActionResult Index(int id)// if not pu int = 0
        //{
        //    return this.Json(id);
        //}

        //public IActionResult Index(TestInputModel input, [FromHeader] string accept)// localhost:5001/Test/Index?Id=1&Years=2020&Years=2019&Name.FirstName=Marin&Name.Lastname=Balashkov
        //{
        //    if (!this.ModelState.IsValid)
        //    {
        //        return this.Json(this.ModelState);
        //    }
        //    return this.Json(input);
        //}



        [HttpGet]
        public IActionResult Index()
        {
            var model = new TestsInputModel()
            {
                University = "SoftUni",//defaul value

                AllCandidateTypes = this.positionService.GetAll()// Get enum from DB

            };

            return this.View(model);
        }

        [HttpPost]
        public async Task<IActionResult> Index(TestsInputModel input)
        {
            if (input.CandidateType < 0)// throw error from controller
            {
                this.ModelState.AddModelError(nameof(TestsInputModel.CandidateType), "Custom Error Message");
            }

            if (!this.ModelState.IsValid)
            {
                input.AllCandidateTypes = this.positionService.GetAll();
                return this.View(input);//populate data in forms after error
            }

            using (var fileStream = new FileStream(@"C:\Temp\User.pdf", FileMode.Create))
            {
                var expectedFileExt = new[] { ".pdf", ".doc", ".docx" };

                if (expectedFileExt.Any(x => input.CV.First().FileName.EndsWith(x)))
                {

                    if (input.CV.First().Length > 1024 * 1024 * 10)//check the file size
                    {
                        this.ModelState.AddModelError(nameof(TestsInputModel.CV), "фаила е по гола м от 10 мб.");
                    }
                    await input.CV.First().CopyToAsync(fileStream);

                }


            }

            return this.Redirect("/");

        }

        public IActionResult Download(string fileName)
        {
            // Construct the path to the physical files folder
            string filePath = this.env.ContentRootPath + this.config["FileSystem:FilesFolderPath"];

            IFileProvider provider = new PhysicalFileProvider(filePath); // Initialize the Provider
            IFileInfo fileInfo = provider.GetFileInfo(fileName); // Extract the FileInfo

            var readStream = fileInfo.CreateReadStream(); // Extact the Stream
            var mimeType = "application/octet-stream"; // Set a mimeType

            return File(readStream, mimeType, fileName); // Return FileResult
        } // NOTE: There is no check if the File exists. This action may result in an error
        private static string MakeValidFileName(string name)
        {
            string invalidChars = System.Text.RegularExpressions.Regex.Escape(new string(System.IO.Path.GetInvalidFileNameChars()));
            string invalidRegStr = string.Format(@"([{0}]*\.+$)|([{0}]+)", invalidChars);

            return System.Text.RegularExpressions.Regex.Replace(name, invalidRegStr, "_");
        }
    }
}
