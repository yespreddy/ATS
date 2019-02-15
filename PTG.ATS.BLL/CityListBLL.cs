using PTG.ATS.DAL.Models;
using PTG.ATS.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace PTG.ATS.BLL
{
    
        public class CityListBLL
        {
            private atsdevContext atsdevContext;
            public CityListBLL()
            {
                atsdevContext = new atsdevContext();
            }

            public List<CityMasterDTO> GetCityMasterDTOs()
            {
                List<CityMasterDTO> CityMasterDTOs = new List<CityMasterDTO>();
                List<CityMaster> cities = atsdevContext.CityMaster.ToList();
                foreach (var item in cities)
                {
                    CityMasterDTO cityDTO = new CityMasterDTO();
                    cityDTO.CityId = item.CityId;
                    cityDTO.Name = item.Name;
                    cityDTO.StateId = item.StateId;
                   // cityDTO.IsActive = item.IsActive;
                    cityDTO.IsDeleted = item.IsDeleted;
                    cityDTO.CreatedBy = item.CreatedBy;
                    cityDTO.CreatedDate = item.CreatedDate;
                    cityDTO.ModifiedBy = item.ModifiedBy;
                    cityDTO.ModifiedDate = item.ModifiedDate;
                    CityMasterDTOs.Add(cityDTO);

                }

                return CityMasterDTOs;
            }
        }
    }

