using System;
using System.Collections.Generic;

namespace PTG.ATS.Entities
{
    public partial class HiringStagesWorkflowMasterDTO
    {
        public HiringStagesWorkflowMasterDTO()
        {
            JobRequisitionHiring = new HashSet<JobRequisitionHiringDTO>();
        }

        public int HiringStagesWorkflowId { get; set; }
        public string HiringStagesWorkflowName { get; set; }
        public string Description { get; set; }
        public int HiringStageId { get; set; }
        public bool? IsActive { get; set; }
        public bool IsDeleted { get; set; }
        public string CreatedBy { get; set; }
        public DateTime? CreatedDate { get; set; }
        public string ModifiedBy { get; set; }
        public DateTime? ModifiedDate { get; set; }

        public virtual HiringStageMasterDTO HiringStage { get; set; }
        public virtual ICollection<JobRequisitionHiringDTO> JobRequisitionHiring { get; set; }
    }
}
