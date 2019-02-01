using PTG.ATS.Infra;
using PTG.ATS.Entities;
using PTG.ATS.DAL;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using PTG.ATS.DAL.Models;

namespace PTG.ATS.BLL
{
    public class JobRequisitionBL : IJobRequisition
    {
        atsdevContext dbContext = new atsdevContext();
        ApplicationContext appContext = ApplicationContext.Instance;

        public List<JobRequisitionDTO> GetJobRequisition()
        {
            //return appContext.atsMasterData.jobRequirementDTOs;
            return dbContext.JobRequisition.Select(x => new JobRequisitionDTO
            {
                //JobRequisitionHiring = PrepareRequistionObject(),
                JobRequisitionId=x.JobRequisitionId,
                RequisitionTemplateId=x.RequisitionTemplateId,
                JobRequisitionHiring = JobRequisitionHiringObject(),
                JobRequisitionInterviewPanel= JobRequisitionInterviewPanelObject(),
                JobRequisitionPreliminaryQuestionnaire= JobRequisitionPreliminaryQuestionnaireObject()
            }).ToList();

        }

        private ICollection<JobRequisitionPreliminaryQuestionnaireDTO> JobRequisitionPreliminaryQuestionnaireObject()
        {
            return appContext.atsMasterData.JobRequisitionPreliminaryQuestionnaireDTOs
                             .Select(y => new JobRequisitionPreliminaryQuestionnaireDTO
                             { FirstName = y.FirstName }).ToList();
        }

        private ICollection<JobRequisitionInterviewPanelDTO> JobRequisitionInterviewPanelObject()
        {
            return appContext.atsMasterData.JobRequisitionInterviewPanelDTOs
                             .Select(y => new JobRequisitionInterviewPanelDTO
                                    { Designation=y.Designation }).ToList();
        }

        private ICollection<JobRequisitionHiringDTO> JobRequisitionHiringObject()
        {
            return appContext.atsMasterData.jobRequisitionHiringDTOs
                        .Select(y => new JobRequisitionHiringDTO
                        {
                            JobRequisition = y.JobRequisition
                        }).ToList();
        }

        public CountryMasterDTO PostCountry(CountryMasterDTO countryDTO)
        {
            try
            {
                CountryMaster country = MapCountry(countryDTO);
                if (countryDTO != null)
                {
                    dbContext.Add(country);
                    dbContext.SaveChanges();
                    appContext.RefreshClaimMasterDataAsync();
                }
                return countryDTO;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        private CountryMaster MapCountry(CountryMasterDTO countryDTO)
        {
            CountryMaster _countryDTO = new CountryMaster();
            _countryDTO.CountryId = countryDTO.CountryId;
            _countryDTO.Name = countryDTO.Name;


            return _countryDTO;
        }

        private List<JobRequisitionHiringDTO> PrepareRequistionObject()
        {
            return appContext.atsMasterData.jobRequisitionHiringDTOs
                        .Select(y => new JobRequisitionHiringDTO
                        {
                               JobRequisition=y.JobRequisition
                        }).ToList();
        }

       
    }
}
