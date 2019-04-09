using System;
using System.Collections.Generic;

namespace PTG.ATS.DAL.Models
{
    public partial class HrquestionMaster
    {
        public HrquestionMaster()
        {
            JobRequisitionPreliminaryQuestionnaireHrquestion = new HashSet<JobRequisitionPreliminaryQuestionnaireHrquestion>();
        }

        public int HrquestionId { get; set; }
        public string HrquestionText { get; set; }
        public string Description { get; set; }
        public bool? IsActive { get; set; }
        public bool IsDeleted { get; set; }
        public string CreatedBy { get; set; }
        public DateTime? CreatedDate { get; set; }
        public string ModifiedBy { get; set; }
        public DateTime? ModifiedDate { get; set; }

        public virtual ICollection<JobRequisitionPreliminaryQuestionnaireHrquestion> JobRequisitionPreliminaryQuestionnaireHrquestion { get; set; }
    }
}
