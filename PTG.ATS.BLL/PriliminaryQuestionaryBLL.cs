using PTG.ATS.Entities;
using System.Collections.Generic;
using System.Linq;
using PTG.ATS.DAL.Models;

namespace PTG.ATS.BLL
{
    public class PriliminaryQuestionaryBLL : IPriliminaryQuestionary
    {
        atsdevContext dbContext = new atsdevContext();
        ApplicationContext appContext = ApplicationContext.Instance;

        public List<HrquestionMasterDTO> GetHRQuestions()
        {
            return dbContext.HrquestionMaster.Select(x => new HrquestionMasterDTO
            {
                HrquestionId = x.HrquestionId,
                HrquestionText = x.HrquestionText,
                Description = x.Description,
                IsActive = x.IsActive,
                IsDeleted = x.IsDeleted
            }).ToList();
        }

        public List<OtherQuestionMasterDTO> GetOtherQuestions()
        {
            return dbContext.OtherQuestionMaster.Select(x => new OtherQuestionMasterDTO
            {
                OtherQuestionId = x.OtherQuestionId,
                OtherQuestionText = x.OtherQuestionText,
                Description = x.Description,
                IsActive = x.IsActive,
                IsDeleted = x.IsDeleted
            }).ToList();
        }
    }
}
