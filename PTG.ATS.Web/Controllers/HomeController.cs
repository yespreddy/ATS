using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;

namespace PTG.ATS.Controllers
{
    public class HomeController : Controller
    {
        public IConfiguration Configuration { get; }
        public HomeController(IConfiguration configuration)
        {
            Configuration = configuration;
        }
        public IActionResult Index()
        {
            LoadViewBag();

            return View();
        }

        private void LoadViewBag()
        {
            ViewBag.ATS_WebUIHost = HttpContext.Request.Host;
            ViewBag.ATS_ServiceURL = Configuration["AzureConfig:ATSServiceURL"];
        }
    }
}