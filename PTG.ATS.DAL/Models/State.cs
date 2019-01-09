using System;
using System.Collections.Generic;

namespace PTG.ATS.DAL.Models
{
    public partial class State
    {
        public State()
        {
            District = new HashSet<District>();
            InterviewPannel = new HashSet<InterviewPannel>();
        }

        public int StateId { get; set; }
        public string StateName { get; set; }
        public int? CountryId { get; set; }
        public DateTime? CreatedDate { get; set; }
        public DateTime? ModifiedDate { get; set; }

        public Country Country { get; set; }
        public ICollection<District> District { get; set; }
        public ICollection<InterviewPannel> InterviewPannel { get; set; }
    }
}
