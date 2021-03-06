﻿using System;
using System.Collections.Generic;

namespace PTG.ATS.DAL.Models
{
    public partial class HiringStageSubStageLinkMasterDTO
    {
        public int HiringStageSubStageLinkMasterId { get; set; }
        public int HiringStageId { get; set; }
        public int HiringStagesWorkflowId { get; set; }
        public bool? IsActive { get; set; }
        public bool IsDeleted { get; set; }
        public string CreatedBy { get; set; }
        public DateTime? CreatedDate { get; set; }
        public string ModifiedBy { get; set; }
        public DateTime? ModifiedDate { get; set; }

        //public virtual HiringStageMaster HiringStage { get; set; }
        //public virtual HiringStagesWorkflowMaster HiringStagesWorkflow { get; set; }
    }
}
