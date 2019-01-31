using System;
using System.Collections.Generic;

namespace PTG.ATS.Entities
{
    public partial class RequisitionTemplateMasterDTO
    {
        public RequisitionTemplateMasterDTO()
        {
            DepartmentMaster = new HashSet<DepartmentMasterDTO>();
            JobRequisition = new HashSet<JobRequisitionDTO>();
            JobTitleMaster = new HashSet<JobTitleMasterDTO>();
            QuestionnairePreviewMaster = new HashSet<QuestionnairePreviewMasterDTO>();
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

        public virtual ICollection<DepartmentMasterDTO> DepartmentMaster { get; set; }
        public virtual ICollection<JobRequisitionDTO> JobRequisition { get; set; }
        public virtual ICollection<JobTitleMasterDTO> JobTitleMaster { get; set; }
        public virtual ICollection<QuestionnairePreviewMasterDTO> QuestionnairePreviewMaster { get; set; }
    }
}
