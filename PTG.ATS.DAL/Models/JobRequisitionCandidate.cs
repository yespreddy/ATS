using System;
using System.Collections.Generic;

namespace PTG.ATS.DAL.Models
{
    public partial class JobRequisitionCandidate
    {
        public JobRequisitionCandidate()
        {
            CandidateEducation = new HashSet<CandidateEducation>();
            CandidateMoreInformation = new HashSet<CandidateMoreInformation>();
        }

        public int JobRequisitionCandidateId { get; set; }
        public int JobRequisitionId { get; set; }
        public string FirstName { get; set; }
        public string MiddleName { get; set; }
        public string LastName { get; set; }
        public string Email { get; set; }
        public string Phone { get; set; }
        public string Address { get; set; }
        public int StateId { get; set; }
        public int CityId { get; set; }
        public int LocationId { get; set; }
        public string PostalCode { get; set; }
        public string Summary { get; set; }
        public decimal? ExpectedSalaryFrom { get; set; }
        public decimal? ExpectedSalaryTo { get; set; }
        public string Nationality { get; set; }
        public string WorkStatusFor { get; set; }
        public string WorkPermitFor { get; set; }
        public string Resume { get; set; }
        public bool? IsActive { get; set; }
        public bool IsDeleted { get; set; }
        public string CreatedBy { get; set; }
        public DateTime? CreatedDate { get; set; }
        public string ModifiedBy { get; set; }
        public DateTime? ModifiedDate { get; set; }

        public virtual CityMaster City { get; set; }
        public virtual JobRequisition JobRequisition { get; set; }
        public virtual LocationMaster Location { get; set; }
        public virtual StateMaster State { get; set; }
        public virtual ICollection<CandidateEducation> CandidateEducation { get; set; }
        public virtual ICollection<CandidateMoreInformation> CandidateMoreInformation { get; set; }
    }
}
