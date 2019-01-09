using System;
using System.Collections.Generic;

namespace PTG.ATS.DAL.Models
{
    public partial class JobRequirement
    {
        public JobRequirement()
        {
            Requisition = new HashSet<Requisition>();
        }

        public int Jrid { get; set; }
        public string JobRequirementName { get; set; }
        public DateTime? CreatedDate { get; set; }
        public DateTime? ModifiedDate { get; set; }

        public ICollection<Requisition> Requisition { get; set; }
    }
}
