using System;
using System.Collections.Generic;

namespace PTG.ATS.DAL.Models
{
    public partial class InterviewPannel
    {
        public int InterPannelId { get; set; }
        public int PreId { get; set; }
        public int? EmpId { get; set; }
        public int? Designation { get; set; }
        public int? Location { get; set; }
        public int? ModeOfInterview { get; set; }
        public int? ChooseRound { get; set; }
        public int RecruitmentManager { get; set; }
        public int Recruiter { get; set; }
        public string InviteOther { get; set; }
        public int? Hrmanager { get; set; }
        public int? Director { get; set; }
        public int? Ceo { get; set; }

        public Employee CeoNavigation { get; set; }
        public InterviewMode ChooseRoundNavigation { get; set; }
        public Role DesignationNavigation { get; set; }
        public Employee DirectorNavigation { get; set; }
        public Employee Emp { get; set; }
        public State LocationNavigation { get; set; }
        public InterviewMode ModeOfInterviewNavigation { get; set; }
        public Preliminary Pre { get; set; }
        public Employee RecruiterNavigation { get; set; }
        public Employee RecruitmentManagerNavigation { get; set; }
    }
}
