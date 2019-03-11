using PTG.ATS.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace PTG.ATS.BLL
{
    public interface IJobRequisitionCandidate
    {
        JobRequisitionCandidateDTO SaveRequisitionCandidate(JobRequisitionCandidateDTO jobRequisitionCandidateDTO);
    }
}
