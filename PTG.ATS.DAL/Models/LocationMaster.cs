﻿using System;
using System.Collections.Generic;

namespace PTG.ATS.DAL.Models
{
    public partial class LocationMaster
    {
        public LocationMaster()
        {
            Employee = new HashSet<Employee>();
            JobRequisition = new HashSet<JobRequisition>();
            JobRequisitionCandidate = new HashSet<JobRequisitionCandidate>();
            JobRequisitionInterviewPanel = new HashSet<JobRequisitionInterviewPanel>();
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

        public virtual CityMaster City { get; set; }
        public virtual ICollection<Employee> Employee { get; set; }
        public virtual ICollection<JobRequisition> JobRequisition { get; set; }
        public virtual ICollection<JobRequisitionCandidate> JobRequisitionCandidate { get; set; }
        public virtual ICollection<JobRequisitionInterviewPanel> JobRequisitionInterviewPanel { get; set; }
    }
}
