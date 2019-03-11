using System;
using System.Collections.Generic;
using System.Text;

namespace PTG.ATS.DAL.Models
{
    public class JobRequisitionCandidate
    {
        public int JobRequisitionCandidateID { get; set; }
        public int JobRequisitionID { get; set; }

        public string FirstName { get; set; }
        public string MiddleName { get; set; }
        public string LastName { get; set; }
        public string Email { get; set; }
        public string Phone { get; set; }

        public string Address { get; set; }
        public int StateID { get; set; }
        public int CityID { get; set; }
        public int LocationID { get; set; }
        public string PostalCode { get; set; }

        public string Summary { get; set; }

        public int CandidateEducationID { get; set; }
        public int EducationTypeID { get; set; }
        public string Specialization { get; set; }
        public string YearOfPassingFrom { get; set; }
        public string YearOfPassingTo { get; set; }

        public decimal? ExpectedSalaryFrom { get; set; }
        public decimal? ExpectedSalaryTo { get; set; }

        public string Nationality { get; set; }
        public string WorkStatusFor { get; set; }
        public string WorkPermitFor { get; set; }   

        public string Resume { get; set; }

        public int MoreInformationTypeID { get; set; }
        public string MoreInformationTypeName { get; set; }
        public string Description { get; set; }        

        public bool? IsActive { get; set; }
        public bool IsDeleted { get; set; }
        public string CreatedBy { get; set; }
        public DateTime? CreatedDate { get; set; }
        public string ModifiedBy { get; set; }
        public DateTime? ModifiedDate { get; set; }
    }
}
