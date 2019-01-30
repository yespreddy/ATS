﻿using System;
using System.Collections.Generic;

namespace PTG.ATS.DAL.Models
{
    public partial class StateMaster
    {
        public StateMaster()
        {
            CityMaster = new HashSet<CityMaster>();
            JobRequisition = new HashSet<JobRequisition>();
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
        public virtual ICollection<JobRequisition> JobRequisition { get; set; }
    }
}
