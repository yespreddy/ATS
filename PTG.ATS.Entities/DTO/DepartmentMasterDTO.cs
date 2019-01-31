using System;
using System.Collections.Generic;

namespace PTG.ATS.Entities
{
    public partial class DepartmentMasterDTO
    {
        public DepartmentMasterDTO()
        {
            Employee = new HashSet<EmployeeDTO>();
            JobRequisition = new HashSet<JobRequisitionDTO>();
        }

        public int DepartmentId { get; set; }
        public string DepartmentName { get; set; }
        public string Description { get; set; }
        public int? RequisitionTemplateId { get; set; }
        public bool? IsActive { get; set; }
        public bool IsDeleted { get; set; }
        public string CreatedBy { get; set; }
        public DateTime? CreatedDate { get; set; }
        public string ModifiedBy { get; set; }
        public DateTime? ModifiedDate { get; set; }

        public virtual RequisitionTemplateMasterDTO RequisitionTemplate { get; set; }
        public virtual ICollection<EmployeeDTO> Employee { get; set; }
        public virtual ICollection<JobRequisitionDTO> JobRequisition { get; set; }
    }
}
