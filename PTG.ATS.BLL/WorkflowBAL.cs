using PTG.ATS.DAL.Models;
using PTG.ATS.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace PTG.ATS.BLL
{
    public class WorkflowBAL : IJobRequisition
    {
        atsdevContext dbContext = new atsdevContext();
        ApplicationContext appContext = ApplicationContext.Instance;

        public List<DepartmentMasterDTO> GetDepartment()
        {
            throw new NotImplementedException();
        }

        public List<EmploymentTypeMasterDTO> GetEmploymentType()
        {
            throw new NotImplementedException();
        }

        public List<HiringStageMasterDTO> GetHiringStages()
        {

            return dbContext.HiringStageMaster.Select(stage => new HiringStageMasterDTO
            {
                HiringStageId = stage.HiringStageId,
                HiringStageName = stage.HiringStageName,
                Description = stage.Description,
                IsLocked = stage.IsLocked,
                IsActive = stage.IsActive,
                IsDeleted = stage.IsDeleted,
                CreatedBy = stage.CreatedBy,
                CreatedDate = stage.CreatedDate,
                ModifiedBy = stage.ModifiedBy,
                ModifiedDate = stage.ModifiedDate
            }).ToList();

        }

        public List<JobRequisitionDTO> GetJobRequisition()
        {
            throw new NotImplementedException();
        }

        public List<JobTitleMasterDTO> GetJobTitleDetails()
        {
            throw new NotImplementedException();
        }

        public List<RequisitionTemplateMasterDTO> GetRequisitionTemplates()
        {
            throw new NotImplementedException();
        }

        public CountryMasterDTO PostCountry(CountryMasterDTO countryDTO)
        {
            throw new NotImplementedException();
        }

        public HiringStageMasterDTO PostHiring(HiringStageMasterDTO hiringStageMasterDTO)
        {
            try
            {
                HiringStageMaster hirings = MapHiring(hiringStageMasterDTO);
                if (hiringStageMasterDTO != null)
                {
                    dbContext.Add(hirings);
                    dbContext.SaveChanges();
                    appContext.RefreshClaimMasterDataAsync();
                }
                return hiringStageMasterDTO;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public JobRequisitionDTO SaveRequisition(JobRequisitionDTO jobRequisitionDTO)
        {
            throw new NotImplementedException();
        }

        private HiringStageMaster MapHiring(HiringStageMasterDTO hiringStageMasterDTO)
        {
            HiringStageMaster _hiringStageMasterDTO = new HiringStageMaster();
            _hiringStageMasterDTO.HiringStageId = hiringStageMasterDTO.HiringStageId;
            _hiringStageMasterDTO.HiringStageName = hiringStageMasterDTO.HiringStageName;


            return _hiringStageMasterDTO;
        }

    }
}
