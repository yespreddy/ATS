using System;
using System.Collections.Generic;

namespace PTG.ATS.DAL.Models
{
    public partial class Employee
    {
        public Employee()
        {
            InterviewPannelCeoNavigation = new HashSet<InterviewPannel>();
            InterviewPannelDirectorNavigation = new HashSet<InterviewPannel>();
            InterviewPannelEmp = new HashSet<InterviewPannel>();
            InterviewPannelRecruiterNavigation = new HashSet<InterviewPannel>();
            InterviewPannelRecruitmentManagerNavigation = new HashSet<InterviewPannel>();
        }

        public int EmpId { get; set; }
        public int Employeeid { get; set; }
        public string EmpFirstName { get; set; }
        public string EmpLastName { get; set; }
        public string Email { get; set; }
        public int Roleid { get; set; }
        public bool IsActive { get; set; }
        public DateTime CreatedDate { get; set; }
        public DateTime? ModifiedDate { get; set; }

        public Role Role { get; set; }
        public ICollection<InterviewPannel> InterviewPannelCeoNavigation { get; set; }
        public ICollection<InterviewPannel> InterviewPannelDirectorNavigation { get; set; }
        public ICollection<InterviewPannel> InterviewPannelEmp { get; set; }
        public ICollection<InterviewPannel> InterviewPannelRecruiterNavigation { get; set; }
        public ICollection<InterviewPannel> InterviewPannelRecruitmentManagerNavigation { get; set; }
    }
}
