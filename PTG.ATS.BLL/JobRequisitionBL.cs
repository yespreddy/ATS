﻿using PTG.ATS.Entities;
using PTG.ATS.DAL;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using PTG.ATS.DAL.Models;
using PTG.ATS.Entities.DTO; //included

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
                JobRequisitionId = x.JobRequisitionId,
                RequisitionTemplateId = x.RequisitionTemplateId
            }).ToList();

        //}

        // Get Requisition Templates List
        public List<RequisitionTemplateMasterDTO> GetRequisitionTemplates()
        {
            return dbContext.RequisitionTemplateMaster.Select(x => new RequisitionTemplateMasterDTO
            {
                RequisitionTemplateId = x.RequisitionTemplateId,
                RequisitionTemplateName = x.RequisitionTemplateName
            }).ToList();
        }

        // Save Requisition Templates 1st Screen
        public JobRequisitionDTO SaveRequisition(JobRequisitionDTO jobRequisitionDTO)
        {
            try
            {
                JobRequisition jobRequisition = MapJobRequisition(jobRequisitionDTO);

                if (jobRequisitionDTO != null)
                {
                    dbContext.Add(jobRequisition);
                    dbContext.SaveChanges();
                    appContext.RefreshClaimMasterDataAsync();
                }
                return jobRequisitionDTO;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        private JobRequisition MapJobRequisition(JobRequisitionDTO jobRequisitionDTO)
        {
            JobRequisition _jobRequisitionDTO = new JobRequisition();
            _jobRequisitionDTO.JobRequisitionId = jobRequisitionDTO.JobRequisitionId;
            _jobRequisitionDTO.RequisitionTemplateId = jobRequisitionDTO.RequisitionTemplateId;
            _jobRequisitionDTO.CountryId = jobRequisitionDTO.CountryId;
            _jobRequisitionDTO.StateId = jobRequisitionDTO.StateId;
            _jobRequisitionDTO.CityId = jobRequisitionDTO.CityId;
            _jobRequisitionDTO.LocationId = jobRequisitionDTO.LocationId;
            _jobRequisitionDTO.PostalCode = jobRequisitionDTO.PostalCode;
            _jobRequisitionDTO.JobTitleId = jobRequisitionDTO.JobTitleId;
            _jobRequisitionDTO.NoOfPositions = jobRequisitionDTO.NoOfPositions;
            _jobRequisitionDTO.EmploymentTypeId = jobRequisitionDTO.EmploymentTypeId;
            _jobRequisitionDTO.DepartmentId = jobRequisitionDTO.DepartmentId;
            _jobRequisitionDTO.Experience = jobRequisitionDTO.Experience;
            _jobRequisitionDTO.ReportingManagerId = jobRequisitionDTO.ReportingManagerId;
            _jobRequisitionDTO.JobDescription = jobRequisitionDTO.JobDescription;
            _jobRequisitionDTO.HiringCloseDate = jobRequisitionDTO.HiringCloseDate;
            _jobRequisitionDTO.JobRequirementJustificationId = jobRequisitionDTO.JobRequirementJustificationId;
            _jobRequisitionDTO.JobRequirementJustificationComments = jobRequisitionDTO.JobRequirementJustificationComments;
            _jobRequisitionDTO.SalaryRangeFrom = jobRequisitionDTO.SalaryRangeFrom;
            _jobRequisitionDTO.SalaryRangeTo = jobRequisitionDTO.SalaryRangeTo;
            _jobRequisitionDTO.ApproverId = jobRequisitionDTO.ApproverId;
            _jobRequisitionDTO.IsVisibilityForRecruitmentHead = jobRequisitionDTO.IsVisibilityForRecruitmentHead;
            _jobRequisitionDTO.IsVisibilityForHrmanager = jobRequisitionDTO.IsVisibilityForHrmanager;
            _jobRequisitionDTO.IsActive = jobRequisitionDTO.IsActive;
            _jobRequisitionDTO.IsDeleted = jobRequisitionDTO.IsDeleted;
            _jobRequisitionDTO.CreatedBy = jobRequisitionDTO.CreatedBy;
            _jobRequisitionDTO.CreatedDate = System.DateTime.Now;
            _jobRequisitionDTO.ModifiedBy = jobRequisitionDTO.ModifiedBy;
            _jobRequisitionDTO.ModifiedDate = jobRequisitionDTO.ModifiedDate;

            return _jobRequisitionDTO;
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
                             { Designation = y.Designation }).ToList();
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
                            JobRequisition = y.JobRequisition
                        }).ToList();
        }

        public List<JobTitleDTO> GetJobTitleDetails()
        {
            return dbContext.JobTitleMaster.Select(x => new JobTitleDTO
            {
                JobTitleId = x.JobTitleId,
                JobTitleName = x.JobTitleName,
                Description = x.Description
            }).ToList();

        }
        public List<EmploymentTypeDTO> GetEmploymentType()
        {
            return dbContext.EmploymentTypeMaster.Select(x => new EmploymentTypeDTO
            {
                EmploymentTypeId = x.EmploymentTypeId,
                EmploymentTypeName = x.EmploymentTypeName,
                Description = x.Description
            }).ToList();

        }
        public List<DepartmentDTO> GetDepartment()
        {
            return dbContext.DepartmentMaster.Select(x => new DepartmentDTO
            {
                DepartmentId = x.DepartmentId,
                DepartmentName = x.DepartmentName,
            }).ToList();

        }


        public HiringStageMasterDTO PostHiringstage(HiringStageMasterDTO hiringStageMasterDTO)
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

        private HiringStageMaster MapHiring(HiringStageMasterDTO hiringStageMasterDTO)
        {
            HiringStageMaster _hiringStageMasterDTO = new HiringStageMaster();
            _hiringStageMasterDTO.HiringStageId = hiringStageMasterDTO.HiringStageId;
            _hiringStageMasterDTO.HiringStageName = hiringStageMasterDTO.HiringStageName;
            _hiringStageMasterDTO.Description = hiringStageMasterDTO.Description;

            return _hiringStageMasterDTO;
        }

        public HiringStageMasterDTO PostHiring(HiringStageMasterDTO hiringStageMasterDTO)
        {
            throw new NotImplementedException();
        }
    }
}
