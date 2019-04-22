using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using PTG.ATS.Entities;
//using Claims.BE.BO;
//using Claims.BE.DTO;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using PTG.ATS.BLL;
using PTG.ATS.Entities.DTO;

// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace PTG.ATS.Services.Controllers
{
    //[Authorize]
    [Produces("application/json")]
    [Route("api/JobRequisition")]
    public class JobRequisitionController : Controller
    {
        IJobRequisition _jobRequisitionBL = null;
        
        public JobRequisitionController(IJobRequisition jobRequisition) {
            _jobRequisitionBL = jobRequisition;
        }

        //Get Method for Test
        [HttpGet]
        [Route("GetJobRequisition")]
        public List<JobRequisitionDTO> GetjobRequisition()
        {
            return _jobRequisitionBL.GetJobRequisition();
        }

        //Post Method for Test
        //[HttpPost]
        //[Route("PostCountry")]
        //public ActionResult PostCountry([FromBody] CountryMasterDTO countryDTO)
        //{
        //    if (countryDTO == null)
        //        return BadRequest();

        //    var response = _jobRequisitionBL.PostCountry(countryDTO);

        //    if (response == null)
        //        return BadRequest();
        //    else
        //        return Ok(response);
        //}

        [HttpGet]
        [Route("GetJobTitle")]
        public List<JobTitleMasterDTO> GetJobTitle()
        {
            return _jobRequisitionBL.GetJobTitleDetails();
        }

        [HttpGet]
        [Route("GetEmploymentType")]
        public List<EmploymentTypeMasterDTO> GetEmploymentType()
        {
            return _jobRequisitionBL.GetEmploymentType();
        }

        [HttpGet]
        [Route("GetDepartment")]
        public List<DepartmentMasterDTO> GetDepartment()
        {
            return _jobRequisitionBL.GetDepartment();
        }

        // Get Method for RequisitionTemplates List
        [HttpGet]
        [Route("GetRequisitionTemplates")]
        public List<RequisitionTemplateMasterDTO> GetRequisitionTemplates()
        {
            return _jobRequisitionBL.GetRequisitionTemplates();
        }

        // Save Requisition Templates 1st Screen
        [HttpPost]
        [Route("SaveRequisition")]
        public ActionResult SaveRequisition([FromBody] JobRequisitionSaveDTO jobRequisitionDTO)
        {
            if (jobRequisitionDTO == null)
                return BadRequest();

            var response = _jobRequisitionBL.SaveRequisition(jobRequisitionDTO);

            if (response == null)
                return BadRequest();
            else
                return Ok(response);
        }
    }
}
