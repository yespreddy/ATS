using System;
using System.Collections.Generic;

namespace PTG.ATS.DAL.Models
{
    public partial class RequisitionTemplateMaster
    {
        public RequisitionTemplateMaster()
        {
            DepartmentMaster = new HashSet<DepartmentMaster>();
            JobRequisition = new HashSet<JobRequisition>();
            JobRequisitionHiringStageSubStageLink = new HashSet<JobRequisitionHiringStageSubStageLink>();
            JobTitleMaster = new HashSet<JobTitleMaster>();
            QuestionnairePreviewMaster = new HashSet<QuestionnairePreviewMaster>();
        }

        public int RequisitionTemplateId { get; set; }
        public string RequisitionTemplateName { get; set; }
        public string Description { get; set; }
        public bool? IsActive { get; set; }
        public bool IsDeleted { get; set; }
        public string CreatedBy { get; set; }
        public DateTime? CreatedDate { get; set; }
        public string ModifiedBy { get; set; }
        public DateTime? ModifiedDate { get; set; }

        public virtual ICollection<DepartmentMaster> DepartmentMaster { get; set; }
        public virtual ICollection<JobRequisition> JobRequisition { get; set; }
        public virtual ICollection<JobRequisitionHiringStageSubStageLink> JobRequisitionHiringStageSubStageLink { get; set; }
        public virtual ICollection<JobTitleMaster> JobTitleMaster { get; set; }
        public virtual ICollection<QuestionnairePreviewMaster> QuestionnairePreviewMaster { get; set; }
    }
}
