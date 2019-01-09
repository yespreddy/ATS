using System;
using System.Collections.Generic;

namespace PTG.ATS.DAL.Models
{
    public partial class Designation
    {
        public int DesId { get; set; }
        public string DesignationName { get; set; }
        public DateTime CreatedDate { get; set; }
        public DateTime? ModifiedDate { get; set; }
    }
}
