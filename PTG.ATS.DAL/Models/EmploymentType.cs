using System;
using System.Collections.Generic;

namespace PTG.ATS.DAL.Models
{
    public partial class EmploymentType
    {
        public EmploymentType()
        {
            Requisition = new HashSet<Requisition>();
        }

        public int EmpTypeId { get; set; }
        public string EmpTypeName { get; set; }
        public bool IsActive { get; set; }
        public DateTime CreatedDate { get; set; }
        public DateTime? ModifiedDate { get; set; }

        public ICollection<Requisition> Requisition { get; set; }
    }
}
