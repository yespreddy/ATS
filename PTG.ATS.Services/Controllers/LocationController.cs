using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using PTG.ATS.BLL;
using PTG.ATS.Entities;

namespace PTG.ATS.Services.Controllers
{
    public class LocationController : Controller
    {
        LocationDeatails _locationDeatails = new LocationDeatails();

        [HttpGet]
        [Route("GetLocationDetails")]
        public List<LocationMasterDTO> GetLocationDetails()
        {
            var tempList = _locationDeatails.GetLocationDetails();
            return tempList;
        }
    }
}    