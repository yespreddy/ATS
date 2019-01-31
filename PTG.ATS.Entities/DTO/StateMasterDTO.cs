using System;
using System.Collections.Generic;

namespace PTG.ATS.Entities
{
    public partial class StateMasterDTO
    {
        public StateMasterDTO()
        {
            CityMaster = new HashSet<CityMasterDTO>();
            JobRequisition = new HashSet<JobRequisitionDTO>();
        }

        public int StateId { get; set; }
        public string Name { get; set; }
        public int? CountryId { get; set; }
        public bool? IsActive { get; set; }
        public bool IsDeleted { get; set; }
        public string CreatedBy { get; set; }
        public DateTime? CreatedDate { get; set; }
        public string ModifiedBy { get; set; }
        public DateTime? ModifiedDate { get; set; }

        public virtual CountryMasterDTO Country { get; set; }
        public virtual ICollection<CityMasterDTO> CityMaster { get; set; }
        public virtual ICollection<JobRequisitionDTO> JobRequisition { get; set; }
    }
}
