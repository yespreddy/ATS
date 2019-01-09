using System;
using System.Collections.Generic;

namespace PTG.ATS.DAL.Models
{
    public partial class Experience
    {
        public Experience()
        {
            PreliminaryRelevExpNavigation = new HashSet<Preliminary>();
            PreliminaryTotalExpNavigation = new HashSet<Preliminary>();
            Requisition = new HashSet<Requisition>();
        }

        public int ExpId { get; set; }
        public string Experience1 { get; set; }
        public DateTime CreatedDate { get; set; }
        public DateTime? ModifiedDate { get; set; }

        public ICollection<Preliminary> PreliminaryRelevExpNavigation { get; set; }
        public ICollection<Preliminary> PreliminaryTotalExpNavigation { get; set; }
        public ICollection<Requisition> Requisition { get; set; }
    }
}
