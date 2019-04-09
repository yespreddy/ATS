using System;
using System.Collections.Generic;

namespace PTG.ATS.DAL.Models
{
    public partial class CandidateMoreInformation
    {
        public int CandidateMoreInformationId { get; set; }
        public int MoreInformationTypeId { get; set; }
        public int JobRequisitionCandidateId { get; set; }
        public bool? IsActive { get; set; }
        public bool IsDeleted { get; set; }
        public string CreatedBy { get; set; }
        public DateTime? CreatedDate { get; set; }
        public string ModifiedBy { get; set; }
        public DateTime? ModifiedDate { get; set; }

        public virtual JobRequisitionCandidate JobRequisitionCandidate { get; set; }
        public virtual MoreInformationTypeMaster MoreInformationType { get; set; }
    }
}
