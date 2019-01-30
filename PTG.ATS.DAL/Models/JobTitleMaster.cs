using System;
using System.Collections.Generic;

namespace PTG.ATS.DAL.Models
{
    public partial class JobTitleMaster
    {
        public JobTitleMaster()
        {
            JobRequisition = new HashSet<JobRequisition>();
            JobRequisitionPreliminaryQuestionnaire = new HashSet<JobRequisitionPreliminaryQuestionnaire>();
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

        public virtual RequisitionTemplateMaster RequisitionTemplate { get; set; }
        public virtual ICollection<JobRequisition> JobRequisition { get; set; }
        public virtual ICollection<JobRequisitionPreliminaryQuestionnaire> JobRequisitionPreliminaryQuestionnaire { get; set; }
    }
}
