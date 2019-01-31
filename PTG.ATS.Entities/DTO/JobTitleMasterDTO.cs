using System;
using System.Collections.Generic;

namespace PTG.ATS.Entities
{
    public partial class JobTitleMasterDTO
    {
        public JobTitleMasterDTO()
        {
            JobRequisition = new HashSet<JobRequisitionDTO>();
            JobRequisitionPreliminaryQuestionnaire = new HashSet<JobRequisitionPreliminaryQuestionnaireDTO>();
        }

        public int JobTitleId { get; set; }
        public string JobTitleName { get; set; }
        public string Description { get; set; }
        public int? RequisitionTemplateId { get; set; }
        public bool? IsActive { get; set; }
        public bool IsDeleted { get; set; }
        public string CreatedBy { get; set; }
        public DateTime? CreatedDate { get; set; }
        public string ModifiedBy { get; set; }
        public DateTime? ModifiedDate { get; set; }

        public virtual RequisitionTemplateMasterDTO RequisitionTemplate { get; set; }
        public virtual ICollection<JobRequisitionDTO> JobRequisition { get; set; }
        public virtual ICollection<JobRequisitionPreliminaryQuestionnaireDTO> JobRequisitionPreliminaryQuestionnaire { get; set; }
    }
}
