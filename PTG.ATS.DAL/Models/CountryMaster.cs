using System;
using System.Collections.Generic;

namespace PTG.ATS.DAL.Models
{
    public partial class CountryMaster
    {
        public CountryMaster()
        {
            JobRequisition = new HashSet<JobRequisition>();
            StateMaster = new HashSet<StateMaster>();
        }

        public int CountryId { get; set; }
        public string Name { get; set; }
        public string CountryCode { get; set; }
        public bool? IsActive { get; set; }
        public bool IsDeleted { get; set; }
        public string CreatedBy { get; set; }
        public DateTime? CreatedDate { get; set; }
        public string ModifiedBy { get; set; }
        public DateTime? ModifiedDate { get; set; }

        public virtual ICollection<JobRequisition> JobRequisition { get; set; }
        public virtual ICollection<StateMaster> StateMaster { get; set; }
    }
}
