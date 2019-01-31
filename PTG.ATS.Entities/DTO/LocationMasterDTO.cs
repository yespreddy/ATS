using System;
using System.Collections.Generic;

namespace PTG.ATS.Entities
{
    public partial class LocationMasterDTO
    {
        public LocationMasterDTO()
        {
            JobRequisition = new HashSet<JobRequisitionDTO>();
            JobRequisitionInterviewPanel = new HashSet<JobRequisitionInterviewPanelDTO>();
        }

        public int LocationId { get; set; }
        public string Name { get; set; }
        public int? CityId { get; set; }
        public string PostalCode { get; set; }
        public bool? IsActive { get; set; }
        public bool IsDeleted { get; set; }
        public string CreatedBy { get; set; }
        public DateTime? CreatedDate { get; set; }
        public string ModifiedBy { get; set; }
        public DateTime? ModifiedDate { get; set; }

        public virtual CityMasterDTO City { get; set; }
        public virtual ICollection<JobRequisitionDTO> JobRequisition { get; set; }
        public virtual ICollection<JobRequisitionInterviewPanelDTO> JobRequisitionInterviewPanel { get; set; }
    }
}
