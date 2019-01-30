using System;
using System.Collections.Generic;

namespace PTG.ATS.DAL.Models
{
    public partial class JobRequirementJustificationMaster
    {
        public JobRequirementJustificationMaster()
        {
            JobRequisition = new HashSet<JobRequisition>();
        }

        public int JobRequirementJustificationId { get; set; }
        public string JobRequirementJustificationName { get; set; }
        public string Description { get; set; }
        public bool? IsActive { get; set; }
        public bool IsDeleted { get; set; }
        public string CreatedBy { get; set; }
        public DateTime? CreatedDate { get; set; }
        public string ModifiedBy { get; set; }
        public DateTime? ModifiedDate { get; set; }

        public virtual ICollection<JobRequisition> JobRequisition { get; set; }
    }
}
