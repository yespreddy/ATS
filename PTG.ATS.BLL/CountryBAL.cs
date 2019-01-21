using PTG.ATS.DAL.Models;
using PTG.ATS.Entities;
using System.Collections.Generic;
using System.Linq;

namespace PTG.ATS.BLL
{
    public class CountryBAL
    {
        private atsdevContext atsdevContext;
        public CountryBAL()
        {
            atsdevContext = new atsdevContext();
        }
        
        public List<CountryDTO> countryDTOs()
        {
            List<CountryDTO> countryDTOs = new List<CountryDTO>();
            List<Country> countries = atsdevContext.Country.ToList();
            foreach (var item in countries)
            {
                CountryDTO countryDTO = new CountryDTO();
                countryDTO.CountryId = item.CountryId;
                countryDTO.CountryName = item.CountryName;

                countryDTOs.Add(countryDTO);
            }

            return countryDTOs;
        }
        
       
    }
}
