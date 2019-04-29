using PTG.ATS.DAL.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography.X509Certificates;
using System.Text;
using PTG.ATS.Entities;

namespace PTG.ATS.BLL
{
    public class EmployeeDetails
    {
        atsdevContext dbContext = new atsdevContext();

        public List<EmployeeDTO> GetEmployeeDetails()
        {
            return dbContext.Employee.Select(x => new EmployeeDTO
            {
                EmployeeFirstName = x.EmployeeFirstName,
                EmployeeLastName = x.EmployeeLastName,
                EmployeeMiddleName = x.EmployeeMiddleName,
                EmployeeId = x.EmployeeId,
                Designation = GetDesignation(x.DesignationId),
                CityId= x.CityId,
                LocationId = x.LocationId,
                LocationName = dbContext.CityMaster.Where(k => k.CityId == x.CityId).Select(y=> y.Name).First(),
                CityName = dbContext.LocationMaster.Where(m => m.LocationId == x.LocationId).Select(z => z.Name).First()
        }).ToList();
        }

        public DesignationMasterDTO GetDesignation(int designationID)
        {
            atsdevContext _dbContext = new atsdevContext();
            return _dbContext.DesignationMaster.Where(x => x.DesignationId == designationID).Select(x => new DesignationMasterDTO
            {
                DesignationName = x.DesignationName,
                DesignationId = x.DesignationId
            }).FirstOrDefault();
        }
       
    }
}
