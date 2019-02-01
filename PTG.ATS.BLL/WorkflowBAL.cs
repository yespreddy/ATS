using PTG.ATS.DAL.Models;
using PTG.ATS.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace PTG.ATS.BLL
{
    public class WorkflowBAL
    {
        atsdevContext dbContext = new atsdevContext();

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
                ModifiedDate = stage.ModifiedDate,
                HiringStagesWorkflowMaster = dbContext.HiringStagesWorkflowMaster.Where(x => x.HiringStageId == stage.HiringStageId).Select(innerstage => new HiringStagesWorkflowMasterDTO
                {
                    HiringStagesWorkflowId = innerstage.HiringStagesWorkflowId,
                    HiringStagesWorkflowName = innerstage.HiringStagesWorkflowName,
                    Description = innerstage.Description,
                    HiringStageId = innerstage.HiringStageId,
                    IsActive = innerstage.IsActive,
                    IsDeleted = innerstage.IsDeleted,
                    CreatedBy = innerstage.CreatedBy,
                    CreatedDate = innerstage.CreatedDate,
                    ModifiedBy = innerstage.ModifiedBy,
                    ModifiedDate = innerstage.ModifiedDate
                }).ToList()
            }).ToList();

        }
    }
}
