//using Claims.BE.BO;
//using Claims.BE.DTO;
//using Claims.DAL.EFModels;
//using Microsoft.IdentityModel.Tokens;
using PTG.ATS.DAL.Models;
using PTG.ATS.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;


namespace PTG.ATS.BLL
{
    public class ApplicationContext
    {

        public atsdevContext db = new atsdevContext();
        public ATSMasterDTO atsMasterData = new ATSMasterDTO();
        public static ApplicationContext Instance { get; private set; } = null;
        //public SymmetricSecurityKey JwtSecret { get; set; } = null;
        public static void InstanceInit()
        {
            if (Instance == null)
            {
                Instance = new ApplicationContext();
            }

        }
        private ApplicationContext()
        {
            DataInit();
            // JwtSecret = new SymmetricSecurityKey(Encoding.ASCII.GetBytes(new Guid().ToString())); / Added for maintaing a dynamic secret on each deploymet or iis restart /
        }
        public void RefreshClaimMasterDataAsync()
        {
            DataInit();
        }

        public void DataInit()
        {
            atsMasterData.jobRequirementDTOs = GetjobRequirement();
            atsMasterData.requisitionDTOs = GetRequisition();
        }

        private List<JobRequisitionDTO> GetRequisition()
        {
            return db.JobRequisition.Select(f => new JobRequisitionDTO
            {
                 JobRequisitionId=f.JobRequisitionId
            }).ToList();
        }

        private List<JobRequisitionDTO> GetjobRequirement()
        {
            return db.JobRequisition
                .Select(f => new JobRequisitionDTO
                {
                    JobRequisitionId=f.JobRequisitionId
                    
                }).ToList();
        }
    }

}
