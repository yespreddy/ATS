using System;
using System.Collections.Generic;
using System.Text;
using PTG.ATS.Entities;

namespace PTG.ATS.BLL
{
    public class ATSMasterDTO
    {
        public List<JobRequisitionDTO> jobRequirementDTOs { get; set; } = new List<JobRequisitionDTO>();
        public List<JobRequisitionDTO> requisitionDTOs { get; set; } = new List<JobRequisitionDTO>();

        public List<JobRequisitionHiringDTO> jobRequisitionHiringDTOs { get; set; } = new List<JobRequisitionHiringDTO>();
    }
}
