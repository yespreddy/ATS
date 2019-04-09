using PTG.ATS.DAL.Models;
using PTG.ATS.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace PTG.ATS.BLL
{
    public class CountryListBLL
    {
        private atsdevContext atsdevContext;
        public CountryListBLL()
        {
            atsdevContext = new atsdevContext();
        }

        public List<CountryMasterDTO> GetcountryMasterDTOs()
        {
            List<CountryMasterDTO> countryMasterDTOs = new List<CountryMasterDTO>();
            List<CountryMaster> countries = atsdevContext.CountryMaster.ToList();
            foreach (var item in countries)
            {
                CountryMasterDTO countryDTO = new CountryMasterDTO();

                countryDTO.CountryId = item.CountryId;
                countryDTO.Name = item.Name;
                countryDTO.CountryCode = item.CountryCode;
                countryDTO.IsActive = item.IsActive;
                countryDTO.IsDeleted = item.IsDeleted;
                countryDTO.CreatedBy = item.CreatedBy;
                countryDTO.CreatedBy = item.CreatedBy;
                countryDTO.CreatedDate = item.CreatedDate;
                countryDTO.ModifiedBy = item.ModifiedBy;
                countryDTO.ModifiedDate = item.ModifiedDate;

                countryMasterDTOs.Add(countryDTO);
            }
            return countryMasterDTOs;
        }

    }
}
