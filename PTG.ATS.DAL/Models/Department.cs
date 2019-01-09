using System;
using System.Collections.Generic;

namespace PTG.ATS.DAL.Models
{
    public partial class Department
    {
        public Department()
        {
            Requisition = new HashSet<Requisition>();
        }

        public int DeptId { get; set; }
        public string DeptName { get; set; }
        public DateTime? CreatedDate { get; set; }
        public DateTime? ModifiedDate { get; set; }

        public ICollection<Requisition> Requisition { get; set; }
    }
}
