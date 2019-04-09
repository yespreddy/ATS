using System;
using System.Collections.Generic;

namespace PTG.ATS.DAL.Models
{
    public partial class JobRequisitionHiringStageSubStageLink
    {
        public int JobRequisitionHiringStageSubStageLinkMasterId { get; set; }
        public int HiringStageId { get; set; }
        public int HiringStagesWorkflowId { get; set; }
        public int RequisitionTemplateId { get; set; }
        public bool? IsActive { get; set; }
        public bool IsDeleted { get; set; }
        public string CreatedBy { get; set; }
        public DateTime? CreatedDate { get; set; }
        public string ModifiedBy { get; set; }
        public DateTime? ModifiedDate { get; set; }

        public virtual HiringStageMaster HiringStage { get; set; }
        public virtual HiringStagesWorkflowMaster HiringStagesWorkflow { get; set; }
        public virtual RequisitionTemplateMaster RequisitionTemplate { get; set; }
    }
}
