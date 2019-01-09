using System;
using System.Collections.Generic;

namespace PTG.ATS.DAL.Models
{
    public partial class Quections
    {
        public Quections()
        {
            Preliminary = new HashSet<Preliminary>();
        }

        public int Qid { get; set; }
        public string Quections1 { get; set; }
        public int AnsId { get; set; }
        public DateTime CreatedDate { get; set; }
        public DateTime? ModifiedDate { get; set; }

        public Answers Ans { get; set; }
        public ICollection<Preliminary> Preliminary { get; set; }
    }
}
