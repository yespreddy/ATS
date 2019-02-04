using PTG.ATS.DAL.Models;
using PTG.ATS.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace PTG.ATS.BLL
{
    public class ModeOfInterviewDetails
    {
        atsdevContext dbContext = new atsdevContext();
        public List<ModeOfInterviewMasterDTO> GetModeOfInterviewDetails()
        {
            return dbContext.ModeOfInterviewMaster.Select(x => new ModeOfInterviewMasterDTO
            {
                ModeOfInterviewId = x.ModeOfInterviewId,
                ModeOfInterviewName = x.ModeOfInterviewName
            }).ToList();
        }
        public List<ModeOfInterviewMasterDTO> ModeOfInterviewMasterDTO(string modeOfInterview)
        {
            return dbContext.ModeOfInterviewMaster.Where(x => x.ModeOfInterviewName == modeOfInterview).Select(x => new ModeOfInterviewMasterDTO
            {
                ModeOfInterviewName = x.ModeOfInterviewName
            }).ToList();
        }

    }
}
