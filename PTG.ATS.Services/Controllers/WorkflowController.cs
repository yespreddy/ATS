using System;
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

// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace PTG.ATS.Services.Controllers
{
    //[Authorize]
    [Produces("application/json")]
    [Route("api/Workflow")]
    public class WorkflowController : Controller
    {
        IJobRequisition _jobRequisition { get; set; }

        public WorkflowController(IJobRequisition jobRequisition)
        {
            _jobRequisition = jobRequisition;
        }

        //Get Method for Test
        // GET: /<controller>/
        [HttpGet]
        [Route("Hiringstage")]
        public List<HiringStageMasterDTO> GetHiringStageDetails()
        {
            WorkflowBAL workflow = new WorkflowBAL();
            var templist=workflow.GetHiringStages();
            return templist;
        }
        [HttpPost]
        [Route("PostHiringstage")]
        public ActionResult PostHiringstage([FromBody] HiringStageMasterDTO hiringStageMasterDTO)
        {
            WorkflowBAL workflow = new WorkflowBAL();
            if (hiringStageMasterDTO == null)
                return BadRequest();

            var response = _jobRequisition.PostHiringstage(hiringStageMasterDTO);

            if (response == null)
                return BadRequest();
            else
                return Ok(response);
        }


    }
}
