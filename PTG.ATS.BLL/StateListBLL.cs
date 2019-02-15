using PTG.ATS.DAL.Models;
using PTG.ATS.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace PTG.ATS.BLL
{
    public class StateListBLL
    {
        private atsdevContext atsdevContext;
        public StateListBLL()
        {
            atsdevContext = new atsdevContext();
        }

        public List<StateMasterDTO> GetStateMasterDTOs()
        {
            List<StateMasterDTO> StateMasterDTOs = new List<StateMasterDTO>();
            List<StateMaster> states = atsdevContext.StateMaster.ToList();
            foreach (var item in states)
            {
                StateMasterDTO stateDTO = new StateMasterDTO();
                stateDTO.StateId = item.StateId;
                stateDTO.Name = item.Name;
                stateDTO.CountryId = item.CountryId;
                //stateDTO.IsActive = item.IsActive;
                stateDTO.IsDeleted = item.IsDeleted;
                stateDTO.CreatedBy = item.CreatedBy;
                stateDTO.CreatedDate = item.CreatedDate;
                stateDTO.ModifiedBy = item.ModifiedBy;
                stateDTO.ModifiedDate = item.ModifiedDate;

                StateMasterDTOs.Add(stateDTO);


            }
            return StateMasterDTOs;
        }
    }
}
