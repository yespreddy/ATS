﻿using System;
using System.Collections.Generic;

namespace PTG.ATS.Entities
{
    public class DesignationMasterDTO
    {
        public int DesignationId { get; set; }
        public string DesignationName { get; set; }
        public string Description { get; set; }
        public bool? IsActive { get; set; }
        public bool IsDeleted { get; set; }
        public string CreatedBy { get; set; }
        public DateTime? CreatedDate { get; set; }
        public string ModifiedBy { get; set; }
        public DateTime? ModifiedDate { get; set; }
    }
}
