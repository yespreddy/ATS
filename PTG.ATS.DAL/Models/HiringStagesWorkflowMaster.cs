﻿using System;
using System.Collections.Generic;

namespace PTG.ATS.DAL.Models
{
    public partial class HiringStagesWorkflowMaster
    {
        public HiringStagesWorkflowMaster()
        {
            JobRequisitionHiring = new HashSet<JobRequisitionHiring>();
        }

        public int HiringStagesWorkflowId { get; set; }
        public string HiringStagesWorkflowName { get; set; }
        public string Description { get; set; }
        public int HiringStageId { get; set; }
        public int? DispalyOrder { get; set; }
        public bool? IsActive { get; set; }
        public bool IsDeleted { get; set; }
        public string CreatedBy { get; set; }
        public DateTime? CreatedDate { get; set; }
        public string ModifiedBy { get; set; }
        public DateTime? ModifiedDate { get; set; }

        public virtual HiringStageMaster HiringStage { get; set; }
        public virtual ICollection<JobRequisitionHiring> JobRequisitionHiring { get; set; }
    }
}
