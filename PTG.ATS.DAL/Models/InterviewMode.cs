using System;
using System.Collections.Generic;

namespace PTG.ATS.DAL.Models
{
    public partial class InterviewMode
    {
        public InterviewMode()
        {
            InterviewPannelChooseRoundNavigation = new HashSet<InterviewPannel>();
            InterviewPannelModeOfInterviewNavigation = new HashSet<InterviewPannel>();
        }

        public int IntId { get; set; }
        public string IntMod { get; set; }
        public DateTime CreatedDate { get; set; }
        public DateTime? ModifiedDate { get; set; }

        public ICollection<InterviewPannel> InterviewPannelChooseRoundNavigation { get; set; }
        public ICollection<InterviewPannel> InterviewPannelModeOfInterviewNavigation { get; set; }
    }
}
