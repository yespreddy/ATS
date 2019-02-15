﻿using System;
using System.Collections.Generic;

namespace PTG.ATS.Entities
{
    public class StateMasterDTO
    {
        public int StateId { get; set; }
        public string Name { get; set; }
        public int? CountryId { get; set; }
        public bool? IsActive { get; set; }
        public bool IsDeleted { get; set; }
        public string CreatedBy { get; set; }
        public DateTime? CreatedDate { get; set; }
        public string ModifiedBy { get; set; }
        public DateTime? ModifiedDate { get; set; }
    }
}
