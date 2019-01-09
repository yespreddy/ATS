using System;
using System.Collections.Generic;

namespace PTG.ATS.DAL.Models
{
    public partial class UserLog
    {
        public int LogId { get; set; }
        public int UserId { get; set; }
        public DateTime LogInTime { get; set; }
        public DateTime? LogoutTime { get; set; }
        public DateTime CreatedDate { get; set; }
        public DateTime? ModifiedDate { get; set; }

        public User User { get; set; }
    }
}
