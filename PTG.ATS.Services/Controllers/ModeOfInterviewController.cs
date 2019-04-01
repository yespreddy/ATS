using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using PTG.ATS.BLL;
using PTG.ATS.Entities;

namespace PTG.ATS.Services.Controllers
{
    public class ModeOfInterviewController : Controller
    {
        ModeOfInterviewDetails _modeOfInterviewDetails = new ModeOfInterviewDetails();

        [HttpGet]
        [Route("GetModeOfInterviewDetails")]
        public List<ModeOfInterviewMasterDTO> GetModeOfInterviewDetails()
        {
            return _modeOfInterviewDetails.GetModeOfInterviewDetails();
        }
    }
}