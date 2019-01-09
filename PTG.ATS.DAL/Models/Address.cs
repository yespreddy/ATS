using System;
using System.Collections.Generic;

namespace PTG.ATS.DAL.Models
{
    public partial class Address
    {
        public int AddressId { get; set; }
        public string Address1 { get; set; }
        public int? DistrictId { get; set; }
        public DateTime? CreatedDate { get; set; }
        public DateTime? ModifiedDate { get; set; }
        public string Postcode { get; set; }

        public District District { get; set; }
    }
}
