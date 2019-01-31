using System;
using System.Collections.Generic;

namespace PTG.ATS.Entities
{
    public partial class JobRequisitionHiringDTO
    {
        public int JobRequisitionHiringId { get; set; }
        public int JobRequisitionId { get; set; }
        public int HiringStageId { get; set; }
        public int HiringStagesWorkflowId { get; set; }
        public bool? IsActive { get; set; }
        public bool IsDeleted { get; set; }
        public string CreatedBy { get; set; }
        public DateTime? CreatedDate { get; set; }
        public string ModifiedBy { get; set; }
        public DateTime? ModifiedDate { get; set; }

        public virtual HiringStageMasterDTO HiringStage { get; set; }
        public virtual HiringStagesWorkflowMasterDTO HiringStagesWorkflow { get; set; }
        public virtual JobRequisitionDTO JobRequisition { get; set; }
    }
}
