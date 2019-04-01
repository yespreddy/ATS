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
        private EmployeeDetails _employeeDetails = new EmployeeDetails();
        [HttpGet]
        [Route("GetModeOfInterviewDetails")]
        public List<ModeOfInterviewMasterDTO> GetModeOfInterviewDetails()
        {
            return _modeOfInterviewDetails.GetModeOfInterviewDetails();
        }
        [HttpGet]

        [Route("GetEmployeeDetails")]

        public List<EmployeeDTO> GetEmployeeDetails()

        {

            var tempList = _employeeDetails.GetEmployeeDetails();

            return tempList;

        }
    }
}