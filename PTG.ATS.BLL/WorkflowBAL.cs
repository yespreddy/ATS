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

        public List<GetWorkFlowDTO> GetHiringStages(int RequisitionTemplatedId)
        {
            var workflowIds = new List<GetWorkFlowDTO> { };
         
            var hiringStageIds = dbContext.JobRequisitionHiringStageSubStageLink.
                 Where(x => x.RequisitionTemplateID == RequisitionTemplatedId).Select(f =>
                 f.HiringStageID
            ).Distinct().ToList();


            try
            {
                if (hiringStageIds.Count > 0)
                {

                    workflowIds = dbContext.JobRequisitionHiringStageSubStageLink.Where(d => hiringStageIds.Contains(d.HiringStageID)).Select(f => new
                    GetWorkFlowDTO
                    {
                        HiringStageId = f.HiringStageID,
                        HiringStageName = dbContext.HiringStageMaster.Where(v => v.HiringStageId == f.HiringStageID).Select(y => y.HiringStageName).First(),
                        GetWorkFloWStagesDTO =
                        dbContext.HiringStagesWorkflowMaster.Where(o => (dbContext.JobRequisitionHiringStageSubStageLink.Where(a => hiringStageIds.Contains(a.HiringStageID)).Select(i => i.HiringStagesWorkflowID)).Contains(f.HiringStagesWorkflowID)).Select(p =>
                                         new GetWorkFloWStagesDTO()
                                         {
                                             HiringStagesWorkflowId = p.HiringStagesWorkflowID,
                                             HiringStagesWorkflowName = p.HiringStagesWorkflowName
                                         }).ToList()

                    }).GroupBy(x => x.HiringStageId).Select(y => y.First()).ToList();

                }
                else {
                    workflowIds = dbContext.HiringStageSubStageLinkMaster.Select(t=>new GetWorkFlowDTO {
                        HiringStageId = t.HiringStageId,
                        HiringStageName = dbContext.HiringStageMaster.Where(r => r.HiringStageId == t.HiringStageId).Select(z => z.HiringStageName).First(),
                        GetWorkFloWStagesDTO = dbContext.HiringStagesWorkflowMaster.Where(o => (dbContext.JobRequisitionHiringStageSubStageLink.Where(a => a.HiringStageID==t.HiringStageId).Select(i => i.HiringStagesWorkflowID)).Contains(o.HiringStagesWorkflowID)).Select(p =>
                                        new GetWorkFloWStagesDTO()
                                        {
                                            HiringStagesWorkflowId = p.HiringStagesWorkflowID,
                                            HiringStagesWorkflowName = p.HiringStagesWorkflowName
                                        }).ToList()

                    }).GroupBy(x => x.HiringStageId).Select(y => y.First()).ToList();
                }

                return workflowIds;
            }
            catch (Exception ex)
            {

                throw;
            }


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
