using System;
using System.Collections.Generic;

namespace PTG.ATS.DAL.Models
{
    public partial class CandidateEducation
    {
        public int CandidateEducationId { get; set; }
        public int JobRequisitionCandidateId { get; set; }
        public int EducationTypeId { get; set; }
        public string Specialization { get; set; }
        public string YearOfPassingFrom { get; set; }
        public string YearOfPassingTo { get; set; }
        public bool? IsActive { get; set; }
        public bool IsDeleted { get; set; }
        public string CreatedBy { get; set; }
        public DateTime? CreatedDate { get; set; }
        public string ModifiedBy { get; set; }
        public DateTime? ModifiedDate { get; set; }

        public virtual EducationTypeMaster EducationType { get; set; }
        public virtual JobRequisitionCandidate JobRequisitionCandidate { get; set; }
    }
}
