using System;
using System.Collections.Generic;

namespace PTG.ATS.DAL.Models
{
    public partial class Role
    {
        public Role()
        {
            Employee = new HashSet<Employee>();
            InterviewPannel = new HashSet<InterviewPannel>();
        }

        public int RoleId { get; set; }
        public string RoleName { get; set; }
        public DateTime CreatedDate { get; set; }
        public DateTime? ModifiedDate { get; set; }

        public ICollection<Employee> Employee { get; set; }
        public ICollection<InterviewPannel> InterviewPannel { get; set; }
    }
}
