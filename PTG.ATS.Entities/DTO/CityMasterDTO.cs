using System;
using System.Collections.Generic;

namespace PTG.ATS.Entities
{
    public partial class CityMasterDTO
    {
        public CityMasterDTO()
        {
            JobRequisition = new HashSet<JobRequisitionDTO>();
            LocationMaster = new HashSet<LocationMasterDTO>();
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

        public virtual StateMasterDTO State { get; set; }
        public virtual ICollection<JobRequisitionDTO> JobRequisition { get; set; }
        public virtual ICollection<LocationMasterDTO> LocationMaster { get; set; }
    }
}
