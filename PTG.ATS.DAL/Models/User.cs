using System;
using System.Collections.Generic;

namespace PTG.ATS.DAL.Models
{
    public partial class User
    {
        public User()
        {
            UserLog = new HashSet<UserLog>();
        }

        public int UserId { get; set; }
        public int Email { get; set; }
        public string Password { get; set; }
        public DateTime CreatedDate { get; set; }
        public DateTime? ModifiedDate { get; set; }

        public ICollection<UserLog> UserLog { get; set; }
    }
}
