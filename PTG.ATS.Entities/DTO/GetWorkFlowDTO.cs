﻿using System;
using System.Collections.Generic;

namespace PTG.ATS.Entities
{
    public class GetWorkFlowDTO
    {
        public int HiringStageId { get; set; }
        public string HiringStageName { get; set; }
        public string Description { get; set; }
        public bool IsLocked { get; set; }
        public bool? IsActive { get; set; }
        public bool IsDeleted { get; set; }
        public string CreatedBy { get; set; }
        public DateTime? CreatedDate { get; set; }
        public string ModifiedBy { get; set; }
        public DateTime? ModifiedDate { get; set; }
        
        public List<GetWorkFloWStagesDTO> GetWorkFloWStagesDTO { get; set; }
    }
}
