using System;
using System.Collections.Generic;

namespace PTG.ATS.DAL.Models
{
    public partial class MoreInformationTypeMaster
    {
        public MoreInformationTypeMaster()
        {
            CandidateMoreInformation = new HashSet<CandidateMoreInformation>();
        }

        public int MoreInformationTypeId { get; set; }
        public string MoreInformationTypeName { get; set; }
        public string Description { get; set; }
        public bool? IsActive { get; set; }
        public bool IsDeleted { get; set; }
        public string CreatedBy { get; set; }
        public DateTime? CreatedDate { get; set; }
        public string ModifiedBy { get; set; }
        public DateTime? ModifiedDate { get; set; }

        public virtual ICollection<CandidateMoreInformation> CandidateMoreInformation { get; set; }
    }
}
