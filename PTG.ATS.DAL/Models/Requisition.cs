using System;
using System.Collections.Generic;

namespace PTG.ATS.DAL.Models
{
    public partial class Requisition
    {
        public Requisition()
        {
            Preliminary = new HashSet<Preliminary>();
        }

        public int ReqId { get; set; }
        public string RequisitionName { get; set; }
        public int Countryid { get; set; }
        public int NoOfPositions { get; set; }
        public int EmpTypeId { get; set; }
        public int DeptId { get; set; }
        public int ExpId { get; set; }
        public int EmpId { get; set; }
        public string JobDesc { get; set; }
        public DateTime? HiringClose { get; set; }
        public int Jrid { get; set; }
        public string Jrdesc { get; set; }
        public decimal? SalaryRangeFrom { get; set; }
        public decimal? SalaryRangeTo { get; set; }
        public int Approver { get; set; }
        public bool VisibilityRectHead { get; set; }
        public bool VisibilityHrhead { get; set; }
        public DateTime CreatedDate { get; set; }
        public DateTime? ModifiedDate { get; set; }

        public Country Country { get; set; }
        public Department Dept { get; set; }
        public EmploymentType EmpType { get; set; }
        public Experience Exp { get; set; }
        public JobRequirement Jr { get; set; }
        public ICollection<Preliminary> Preliminary { get; set; }
    }
}
