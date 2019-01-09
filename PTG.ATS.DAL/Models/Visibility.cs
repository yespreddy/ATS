using System;
using System.Collections.Generic;

namespace PTG.ATS.DAL.Models
{
    public partial class Visibility
    {
        public int Vid { get; set; }
        public string VisibilityName { get; set; }
        public bool IsActive { get; set; }
        public DateTime CreatedDate { get; set; }
        public DateTime? ModifiedDate { get; set; }
    }
}
