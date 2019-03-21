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
        public List<LocationMasterDTO> GetLocationDetails()
        {
            return dbContext.LocationMaster.Select(x => new LocationMasterDTO
            {
                LocationId = x.LocationId,
                Name = x.Name,
                City = GetCity(x.CityId)

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
    }
}
