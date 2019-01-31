using System;
using System.Collections.Generic;

namespace PTG.ATS.Entities
{
    public partial class EmploymentTypeMasterDTO
    {
        public EmploymentTypeMasterDTO()
        {
            Employee = new HashSet<EmployeeDTO>();
            JobRequisition = new HashSet<JobRequisitionDTO>();
        }

        public int EmploymentTypeId { get; set; }
        public string EmploymentTypeName { get; set; }
        public string Description { get; set; }
        public bool? IsActive { get; set; }
        public bool IsDeleted { get; set; }
        public string CreatedBy { get; set; }
        public DateTime? CreatedDate { get; set; }
        public string ModifiedBy { get; set; }
        public DateTime? ModifiedDate { get; set; }

        public virtual ICollection<EmployeeDTO> Employee { get; set; }
        public virtual ICollection<JobRequisitionDTO> JobRequisition { get; set; }
    }
}
