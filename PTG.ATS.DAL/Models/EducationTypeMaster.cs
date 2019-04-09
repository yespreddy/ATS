using System;
using System.Collections.Generic;

namespace PTG.ATS.DAL.Models
{
    public partial class EducationTypeMaster
    {
        public EducationTypeMaster()
        {
            CandidateEducation = new HashSet<CandidateEducation>();
        }

        public int EducationTypeId { get; set; }
        public string EducationTypeName { get; set; }
        public string Description { get; set; }
        public bool? IsActive { get; set; }
        public bool IsDeleted { get; set; }
        public string CreatedBy { get; set; }
        public DateTime? CreatedDate { get; set; }
        public string ModifiedBy { get; set; }
        public DateTime? ModifiedDate { get; set; }

        public virtual ICollection<CandidateEducation> CandidateEducation { get; set; }
    }
}
