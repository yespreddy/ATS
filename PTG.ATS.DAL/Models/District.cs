using System;
using System.Collections.Generic;

namespace PTG.ATS.DAL.Models
{
    public partial class District
    {
        public District()
        {
            Address = new HashSet<Address>();
        }

        public int DistrictId { get; set; }
        public string DistrictName { get; set; }
        public int? StateId { get; set; }
        public DateTime? CreatedDate { get; set; }
        public DateTime? ModifiedDate { get; set; }

        public State State { get; set; }
        public ICollection<Address> Address { get; set; }
    }
}
