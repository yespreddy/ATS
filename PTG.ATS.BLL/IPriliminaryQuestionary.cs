using PTG.ATS.Entities;
using System.Collections.Generic;

namespace PTG.ATS.BLL
{
    public interface IPriliminaryQuestionary
    {
        List<HrquestionMasterDTO> GetHRQuestions();
        List<OtherQuestionMasterDTO> GetOtherQuestions();
    }
}
