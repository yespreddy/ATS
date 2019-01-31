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

// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace PTG.ATS.Services.Controllers
{
    //[Authorize]
    [Produces("application/json")]
    [Route("api/Common")]
    public class CommonController : Controller
    {

        ICommon _common { get; set; }

        public CommonController(ICommon common)
        {
            _common = common;
        }

        //Get Method for Test
        // GET: /<controller>/
        [HttpGet]
        [Route("GetCommon")]
        public string GetCommon()
        {
            return "Common";
        }

       

    }
}
