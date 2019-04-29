using System;
using System.Collections.Generic;

namespace PTG.ATS.Entities
{
    public class EmployeeDTO
    {
        public int EmployeeId { get; set; }
        public string EmployeeFirstName { get; set; }
        public string EmployeeMiddleName { get; set; }
        public string EmployeeLastName { get; set; }
        public int DesignationId { get; set; }
        public int EmploymentTypeId { get; set; }
        public int DepartmentId { get; set; }
        public int CountryId { get; set; }
        public int StateId { get; set; }
        public int CityId { get; set; }
        public int LocationId { get; set; }
        public string LocationName { get; set; }
        public string CityName { get; set; }
        public bool? IsActive { get; set; }
        public bool IsDeleted { get; set; }
        public string CreatedBy { get; set; }
        public DateTime? CreatedDate { get; set; }
        public string ModifiedBy { get; set; }
        public DateTime? ModifiedDate { get; set; }
        public DesignationMasterDTO Designation { get; set; }
        public LocationMasterDTO Location { get; set; }
        public CityMasterDTO City { get; set; }
    }
}
