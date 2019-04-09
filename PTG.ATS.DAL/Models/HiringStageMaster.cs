using System;
using System.Collections.Generic;

namespace PTG.ATS.DAL.Models
{
    public partial class HiringStageMaster
    {
        public HiringStageMaster()
        {
            HiringStageSubStageLinkMaster = new HashSet<HiringStageSubStageLinkMaster>();
            JobRequisitionHiring = new HashSet<JobRequisitionHiring>();
            JobRequisitionHiringStageSubStageLink = new HashSet<JobRequisitionHiringStageSubStageLink>();
        }

        public int HiringStageId { get; set; }
        public string HiringStageName { get; set; }
        public string Description { get; set; }
        public int? DispalyOrder { get; set; }
        public bool IsLocked { get; set; }
        public bool? IsActive { get; set; }
        public bool IsDeleted { get; set; }
        public string CreatedBy { get; set; }
        public DateTime? CreatedDate { get; set; }
        public string ModifiedBy { get; set; }
        public DateTime? ModifiedDate { get; set; }

        public virtual ICollection<HiringStageSubStageLinkMaster> HiringStageSubStageLinkMaster { get; set; }
        public virtual ICollection<JobRequisitionHiring> JobRequisitionHiring { get; set; }
        public virtual ICollection<JobRequisitionHiringStageSubStageLink> JobRequisitionHiringStageSubStageLink { get; set; }
    }
}
