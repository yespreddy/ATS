using System;
using System.Collections.Generic;

namespace PTG.ATS.Entities
{
    public partial class JobRequisitionPreliminaryQuestionnaireDTO
    {
        public int JobRequisitionPreliminaryQuestionnaireId { get; set; }
        public int JobRequisitionId { get; set; }
        public string FirstName { get; set; }
        public string MiddleName { get; set; }
        public string LastName { get; set; }
        public string Email { get; set; }
        public string MobileNumber { get; set; }
        public string AlternativeMobileNumber { get; set; }
        public int PositionAppliedId { get; set; }
        public string TotalExperience { get; set; }
        public string RelevantExperience { get; set; }
        public string PresentCustomer { get; set; }
        public string RolePreference { get; set; }
        public bool IsInterstedFormultipleRole { get; set; }
        public string GenerateAcustomLink { get; set; }
        public bool? IsActive { get; set; }
        public bool IsDeleted { get; set; }
        public string CreatedBy { get; set; }
        public DateTime? CreatedDate { get; set; }
        public string ModifiedBy { get; set; }
        public DateTime? ModifiedDate { get; set; }

        public virtual JobRequisitionDTO JobRequisition { get; set; }
        public virtual JobTitleMasterDTO PositionApplied { get; set; }
    }
}
