using System;
using System.Collections.Generic;

namespace PTG.ATS.DAL.Models
{
    public partial class StateMaster
    {
        public StateMaster()
        {
            CityMaster = new HashSet<CityMaster>();
            Employee = new HashSet<Employee>();
            JobRequisition = new HashSet<JobRequisition>();
            JobRequisitionCandidate = new HashSet<JobRequisitionCandidate>();
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

        public virtual CountryMaster Country { get; set; }
        public virtual ICollection<CityMaster> CityMaster { get; set; }
        public virtual ICollection<Employee> Employee { get; set; }
        public virtual ICollection<JobRequisition> JobRequisition { get; set; }
        public virtual ICollection<JobRequisitionCandidate> JobRequisitionCandidate { get; set; }
    }
}
