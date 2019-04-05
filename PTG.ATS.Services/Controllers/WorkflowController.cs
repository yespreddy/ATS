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
using PTG.ATS.DAL.Models;

// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace PTG.ATS.Services.Controllers
{
    //[Authorize]
    [Produces("application/json")]
    [Route("api/Workflow")]
    public class WorkflowController : Controller
    {
        WorkflowBAL workflow = new WorkflowBAL();

        IJobRequisition _jobRequisition { get; set; }

        //Get Method for Test
        // GET: /<controller>/
        [HttpGet]
        [Route("Hiringstage")]
        public List<GetWorkFlowDTO> GetHiringStageDetails(int RequisitionTemplatedId)
        {
            return workflow.GetHiringStages(RequisitionTemplatedId);
        }
        [HttpPost]
        [Route("PostHiringstage")]
        public ActionResult PostHiringstage([FromBody] HiringStageMasterDTO hiringStageMasterDTO)
        {
            if (hiringStageMasterDTO == null)
                return BadRequest();

            var response = _jobRequisition.PostHiring(hiringStageMasterDTO);

            if (response == null)
                return BadRequest();
            else
                return Ok(response);
        }


    }
}
