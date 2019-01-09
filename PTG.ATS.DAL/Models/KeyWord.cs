using System;
using System.Collections.Generic;

namespace PTG.ATS.DAL.Models
{
    public partial class KeyWord
    {
        public KeyWord()
        {
            Preliminary = new HashSet<Preliminary>();
        }

        public int Kwid { get; set; }
        public string Kwname { get; set; }
        public bool IsActive { get; set; }
        public DateTime CreatedDate { get; set; }
        public DateTime? ModifiedDate { get; set; }

        public ICollection<Preliminary> Preliminary { get; set; }
    }
}
