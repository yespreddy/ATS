using System;
using System.Collections.Generic;

namespace PTG.ATS.DAL.Models
{
    public partial class CityMaster
    {
        public CityMaster()
        {
            JobRequisition = new HashSet<JobRequisition>();
            JobRequisitionCandidate = new HashSet<JobRequisitionCandidate>();
            LocationMaster = new HashSet<LocationMaster>();
        }

        public int CityId { get; set; }
        public string Name { get; set; }
        public int? StateId { get; set; }
        public bool? IsActive { get; set; }
        public bool IsDeleted { get; set; }
        public string CreatedBy { get; set; }
        public DateTime? CreatedDate { get; set; }
        public string ModifiedBy { get; set; }
        public DateTime? ModifiedDate { get; set; }

        public virtual StateMaster State { get; set; }
        public virtual ICollection<JobRequisition> JobRequisition { get; set; }
        public virtual ICollection<JobRequisitionCandidate> JobRequisitionCandidate { get; set; }
        public virtual ICollection<LocationMaster> LocationMaster { get; set; }
    }
}
