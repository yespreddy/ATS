using System;
using System.Collections.Generic;

namespace PTG.ATS.DAL.Models
{
    public partial class Preliminary
    {
        public Preliminary()
        {
            InterviewPannel = new HashSet<InterviewPannel>();
        }

        public int PreId { get; set; }
        public int ReqId { get; set; }
        public string RequisitionName { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Email { get; set; }
        public int MobileNumber { get; set; }
        public int AltMobNumber { get; set; }
        public int PositionAppliedFor { get; set; }
        public int TotalExp { get; set; }
        public int RelevExp { get; set; }
        public string PresentCustomer { get; set; }
        public string RolePreference { get; set; }
        public bool DevelopmentOrsupport { get; set; }
        public int Qid { get; set; }

        public KeyWord PositionAppliedForNavigation { get; set; }
        public Quections Q { get; set; }
        public Experience RelevExpNavigation { get; set; }
        public Requisition Req { get; set; }
        public Experience TotalExpNavigation { get; set; }
        public ICollection<InterviewPannel> InterviewPannel { get; set; }
    }
}
