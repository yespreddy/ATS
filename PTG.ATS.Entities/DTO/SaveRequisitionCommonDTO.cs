using System;
using System.Collections.Generic;
using System.Text;

namespace PTG.ATS.Entities.DTO
{
    public class SaveRequisitionCommonDTO
    {
        public int savetype { get; set; }

        public int JobRequisitionId { get; set; }

        public JobRequisitionSaveDTO  JobRequisition { get; set; } = null;

      public JobRequisitionInterviewPanelDTO JobRequisitionInterviewPanel { get; set; } = null;
    }
}
