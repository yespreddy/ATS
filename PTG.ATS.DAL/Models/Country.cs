using System;
using System.Collections.Generic;

namespace PTG.ATS.DAL.Models
{
    public partial class Country
    {
        public Country()
        {
            Requisition = new HashSet<Requisition>();
            State = new HashSet<State>();
        }

        public int CountryId { get; set; }
        public string CountryName { get; set; }
        public DateTime? CreatedDate { get; set; }
        public DateTime? ModifiedDate { get; set; }

        public ICollection<Requisition> Requisition { get; set; }
        public ICollection<State> State { get; set; }
    }
}
