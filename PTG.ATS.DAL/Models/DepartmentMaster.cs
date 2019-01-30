using System;
using System.Collections.Generic;

namespace PTG.ATS.DAL.Models
{
    public partial class DepartmentMaster
    {
        public DepartmentMaster()
        {
            Employee = new HashSet<Employee>();
            JobRequisition = new HashSet<JobRequisition>();
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

        public virtual RequisitionTemplateMaster RequisitionTemplate { get; set; }
        public virtual ICollection<Employee> Employee { get; set; }
        public virtual ICollection<JobRequisition> JobRequisition { get; set; }
    }
}
