﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using PTG.ATS.Entities;
//using Claims.BE.BO;
//using Claims.BE.DTO;
using PTG.ATS.Infra;
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

        IJobRequisition _jobRequisition { get; set; }

        public JobRequisitionController(IJobRequisition jobRequisition)
        {
            _jobRequisition = jobRequisition;
        }

        //Get Method for Test
        // GET: /<controller>/
        [HttpGet]
        [Route("GetJobRequisition")]
        public List<JobRequisitionDTO> GetjobRequisition()
        {
            return _jobRequisition.GetJobRequisition();
        }

        //Post Method for Test
        [HttpPost]
        [Route("PostCountry")]
        public ActionResult PostCountry([FromBody] CountryMasterDTO countryDTO)
        {
            if (countryDTO == null)
                return BadRequest();

            var response = _jobRequisition.PostCountry(countryDTO);

            if (response == null)
                return BadRequest();
            else
                return Ok(response);
        }

        [HttpGet]
        [Route("GetJobTitle")]
        public List<JobTitleDTO> GetJobTitle()
        {
            JobRequisitionBL _jobRequisitionBL = new JobRequisitionBL();
            return _jobRequisitionBL.GetJobTitleDetails();
        }
        [HttpGet]
        [Route("GetEmploymentType")]
        public List<EmploymentTypeDTO> GetEmploymentType()
        {
            JobRequisitionBL _jobRequisitionBL = new JobRequisitionBL();
            return _jobRequisitionBL.GetEmploymentType();
        }
        [HttpGet]
        [Route("GetDepartment")]
        public List<DepartmentDTO> GetDepartment()
        {
            JobRequisitionBL _jobRequisitionBL = new JobRequisitionBL();
            return _jobRequisitionBL.GetDepartment();
        }


    }
}
