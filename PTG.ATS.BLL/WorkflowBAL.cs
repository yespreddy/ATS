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
                 Where(x => x.RequisitionTemplateId == RequisitionTemplatedId).Select(f =>
                 f.HiringStageId
            ).Distinct().ToList();


            try
            {
                if (hiringStageIds.Count > 0)
                {

                    workflowIds = dbContext.JobRequisitionHiringStageSubStageLink.Where(d => hiringStageIds.Contains(d.HiringStageId)).Select(f => new
                    GetWorkFlowDTO
                    {
                        HiringStageId = f.HiringStageId,
                        HiringStageName = dbContext.HiringStageMaster.Where(v => v.HiringStageId == f.HiringStageId).Select(y => y.HiringStageName).First(),
                        GetWorkFloWStagesDTO =
                        dbContext.HiringStagesWorkflowMaster.Where(o => (dbContext.JobRequisitionHiringStageSubStageLink.Where(a => hiringStageIds.Contains(a.HiringStageId)).Select(i => i.HiringStagesWorkflowId)).Contains(f.HiringStagesWorkflowId)).Select(p =>
                                         new GetWorkFloWStagesDTO()
                                         {
                                             HiringStagesWorkflowId = p.HiringStagesWorkflowId,
                                             HiringStagesWorkflowName = p.HiringStagesWorkflowName
                                         }).ToList()

                    }).GroupBy(x => x.HiringStageId).Select(y => y.First()).ToList();

                }
                else {
                    workflowIds = dbContext.HiringStageSubStageLinkMaster.Select(t=>new GetWorkFlowDTO {
                        HiringStageId = t.HiringStageId,
                        HiringStageName = dbContext.HiringStageMaster.Where(r => r.HiringStageId == t.HiringStageId).Select(z => z.HiringStageName).First(),
                        GetWorkFloWStagesDTO = dbContext.HiringStagesWorkflowMaster.Where(o => (dbContext.HiringStageSubStageLinkMaster.Where(a => a.HiringStageId==t.HiringStageId).Select(i => i.HiringStagesWorkflowId)).Contains(o.HiringStagesWorkflowId)).Select(p =>
                                        new GetWorkFloWStagesDTO()
                                        {
                                            HiringStagesWorkflowId = p.HiringStagesWorkflowId,
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
