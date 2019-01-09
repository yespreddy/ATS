using System;
using System.Collections.Generic;

namespace PTG.ATS.DAL.Models
{
    public partial class Answers
    {
        public Answers()
        {
            Quections = new HashSet<Quections>();
        }

        public int AnsId { get; set; }
        public string Answers1 { get; set; }
        public DateTime CreatedDate { get; set; }
        public DateTime? ModifiedDate { get; set; }

        public ICollection<Quections> Quections { get; set; }
    }
}
