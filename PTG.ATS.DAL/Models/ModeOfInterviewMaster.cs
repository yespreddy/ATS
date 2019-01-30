using System;
using System.Collections.Generic;

namespace PTG.ATS.DAL.Models
{
    public partial class ModeOfInterviewMaster
    {
        public ModeOfInterviewMaster()
        {
            JobRequisitionInterviewPanel = new HashSet<JobRequisitionInterviewPanel>();
        }

        public int ModeOfInterviewId { get; set; }
        public string ModeOfInterviewName { get; set; }
        public string Description { get; set; }
        public bool? IsActive { get; set; }
        public bool IsDeleted { get; set; }
        public string CreatedBy { get; set; }
        public DateTime? CreatedDate { get; set; }
        public string ModifiedBy { get; set; }
        public DateTime? ModifiedDate { get; set; }

        public virtual ICollection<JobRequisitionInterviewPanel> JobRequisitionInterviewPanel { get; set; }
    }
}
