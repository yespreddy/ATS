using PTG.ATS.DAL.Models;
using PTG.ATS.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace PTG.ATS.BLL
{
    public class LocationDeatails
    {
        atsdevContext dbContext = new atsdevContext();
        //public List<LocationMasterDTO> GetLocationDetails()
        //{
        //    return dbContext.LocationMaster.Select(x => new LocationMasterDTO
        //    {
        //        LocationId = x.LocationId,
        //        Name = x.Name,
        //        City = GetCity(x.CityId)

        //    }).ToList();
        //}
        public List<CountryMasterDTO> GetCountries()
        {
            return dbContext.CountryMaster.Select(x => new CountryMasterDTO
            {
                CountryId = x.CountryId,
                Name = x.Name,
                CountryCode = x.CountryCode,
                IsActive = x.IsActive,
                IsDeleted = x.IsDeleted

            }).ToList();
        }
        public List<StateMasterDTO> GetStates(int CountryId)
        {
            return dbContext.StateMaster.Where(x => x.CountryId == CountryId).Select(x => new StateMasterDTO
            {
                StateId = x.StateId,
                Name = x.Name,
                CountryId = x.CountryId,
                IsActive = x.IsActive,
                IsDeleted = x.IsDeleted

            }).ToList();
        }
        public List<CityMasterDTO> GetCities(int StateId)
        {
            return dbContext.CityMaster.Where(x => x.StateId == StateId).Select(x => new CityMasterDTO
            {
                CityId = x.CityId,
                StateId = x.StateId,
                Name = x.Name,              
                IsActive = x.IsActive,
                IsDeleted = x.IsDeleted

            }).ToList();
        }
        public CityMasterDTO GetCity(int? cityId)
        {
            return dbContext.CityMaster.Where(x => x.CityId == cityId).Select(x => new CityMasterDTO
            {
                Name = x.Name,
                CityId = x.CityId

            }).FirstOrDefault();
        }
        public List<LocationMasterDTO> GetLocation(int? cityId)
        {
            return dbContext.LocationMaster.Where(x => x.CityId == cityId).Select(x => new LocationMasterDTO
            {
                Name = x.Name,
                LocationId = x.LocationId

            }).ToList();
        }
    }
}
