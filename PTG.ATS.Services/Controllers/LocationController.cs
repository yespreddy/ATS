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

        //[HttpGet]
        //[Route("GetLocationDetails")]
        //public List<LocationMasterDTO> GetLocationDetails()
        //{
        //    var tempList = _locationDeatails.GetLocationDetails();
        //    return tempList;
        //}

        [HttpGet]
        [Route("GetCountries")]
        public List<CountryMasterDTO> GetCountries()
        {
            var tempCities = _locationDeatails.GetCountries();
            return tempCities;
        }

        [HttpGet]
        [Route("GetStates")]
        public List<StateMasterDTO> GetStates(int CountryId)
        {
            var tempSates = _locationDeatails.GetStates(CountryId);
            return tempSates;
        }
        [HttpGet]
        [Route("GetCities")]
        public List<CityMasterDTO> GetCities(int StateId)
        {
            var tempCities = _locationDeatails.GetCities(StateId);
            return tempCities;
        }
        [HttpGet]
        [Route("GetLocation")]
        public List<LocationMasterDTO> GetLocation(int cityId)
        {
            var templocation = _locationDeatails.GetLocation(cityId);
            return templocation;
        }
    }
}    