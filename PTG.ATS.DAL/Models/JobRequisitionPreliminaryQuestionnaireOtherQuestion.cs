using System;
using System.Collections.Generic;

namespace PTG.ATS.DAL.Models
{
    public partial class JobRequisitionPreliminaryQuestionnaireOtherQuestion
    {
        public int QuestionnairePreviewOtherQuestionId { get; set; }
        public int JobRequisitionPreliminaryQuestionnaireId { get; set; }
        public int OtherQuestionId { get; set; }
        public string AnswerText { get; set; }
        public bool? IsActive { get; set; }
        public bool IsDeleted { get; set; }
        public string CreatedBy { get; set; }
        public DateTime? CreatedDate { get; set; }
        public string ModifiedBy { get; set; }
        public DateTime? ModifiedDate { get; set; }

        public virtual JobRequisitionPreliminaryQuestionnaire JobRequisitionPreliminaryQuestionnaire { get; set; }
        public virtual OtherQuestionMaster OtherQuestion { get; set; }
    }
}
