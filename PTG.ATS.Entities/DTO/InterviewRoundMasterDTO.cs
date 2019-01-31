using System;
using System.Collections.Generic;

namespace PTG.ATS.Entities
{
    public partial class InterviewRoundMasterDTO
    {
        public InterviewRoundMasterDTO()
        {
            JobRequisitionInterviewPanel = new HashSet<JobRequisitionInterviewPanelDTO>();
        }

        public int InterviewRoundId { get; set; }
        public string InterviewRoundName { get; set; }
        public string Description { get; set; }
        public bool? IsActive { get; set; }
        public bool IsDeleted { get; set; }
        public string CreatedBy { get; set; }
        public DateTime? CreatedDate { get; set; }
        public string ModifiedBy { get; set; }
        public DateTime? ModifiedDate { get; set; }

        public virtual ICollection<JobRequisitionInterviewPanelDTO> JobRequisitionInterviewPanel { get; set; }
    }
}
