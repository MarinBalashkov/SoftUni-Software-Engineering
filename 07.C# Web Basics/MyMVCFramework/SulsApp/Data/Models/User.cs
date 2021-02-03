using SIS.MvcFramework;
using System;
using System.Collections.Generic;
using System.Text;

namespace SulsApp.Data.Models
{
    public class User : IdentityUser<string>
    {
        public User()
        {
            this.Id = Guid.NewGuid().ToString();
            this.Submissions = new HashSet<Submission>();
        }

        public virtual ICollection<Submission> Submissions { get; set; }
    }
}
