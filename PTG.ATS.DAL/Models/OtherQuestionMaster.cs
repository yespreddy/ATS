using System;
using System.Collections.Generic;

namespace PTG.ATS.DAL.Models
{
    public partial class OtherQuestionMaster
    {
        public OtherQuestionMaster()
        {
            JobRequisitionPreliminaryQuestionnaireOtherQuestion = new HashSet<JobRequisitionPreliminaryQuestionnaireOtherQuestion>();
        }

        public int OtherQuestionId { get; set; }
        public string OtherQuestionText { get; set; }
        public string Description { get; set; }
        public bool? IsActive { get; set; }
        public bool IsDeleted { get; set; }
        public string CreatedBy { get; set; }
        public DateTime? CreatedDate { get; set; }
        public string ModifiedBy { get; set; }
        public DateTime? ModifiedDate { get; set; }

        public virtual ICollection<JobRequisitionPreliminaryQuestionnaireOtherQuestion> JobRequisitionPreliminaryQuestionnaireOtherQuestion { get; set; }
    }
}
