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
    public class JobRequisitionCandidateBLL : IJobRequisitionCandidate
    {
        atsdevContext dbContext = new atsdevContext();
        ApplicationContext appContext = ApplicationContext.Instance;

        // Save Requisition Candidate Templates 53rd  Screen
        public JobRequisitionCandidateDTO SaveRequisitionCandidate(JobRequisitionCandidateDTO jobRequisitionCandidateDTO)
        {
            try
            {
                JobRequisitionCandidate jobRequisition = MapJobRequisitionCandidate(jobRequisitionCandidateDTO);

                if (jobRequisitionCandidateDTO != null)
                {
                    dbContext.Add(jobRequisition);
                    dbContext.SaveChanges();
                    appContext.RefreshClaimMasterDataAsync();
                }
                return jobRequisitionCandidateDTO;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        private JobRequisitionCandidate MapJobRequisitionCandidate(JobRequisitionCandidateDTO jobRequisitionCandidateDTO)
        {
            JobRequisitionCandidate _jobRequisitionCandidateDTO = new JobRequisitionCandidate();

            _jobRequisitionCandidateDTO.JobRequisitionCandidateID = jobRequisitionCandidateDTO.JobRequisitionCandidateID;
            _jobRequisitionCandidateDTO.JobRequisitionID = jobRequisitionCandidateDTO.JobRequisitionID;
            _jobRequisitionCandidateDTO.FirstName = jobRequisitionCandidateDTO.FirstName;
            _jobRequisitionCandidateDTO.MiddleName = jobRequisitionCandidateDTO.MiddleName;
            _jobRequisitionCandidateDTO.LastName = jobRequisitionCandidateDTO.LastName;
            _jobRequisitionCandidateDTO.Email = jobRequisitionCandidateDTO.Email;
            _jobRequisitionCandidateDTO.Phone = jobRequisitionCandidateDTO.Phone;
            _jobRequisitionCandidateDTO.Address = jobRequisitionCandidateDTO.Address;
            _jobRequisitionCandidateDTO.StateID = jobRequisitionCandidateDTO.StateID;
            _jobRequisitionCandidateDTO.CityID = jobRequisitionCandidateDTO.CityID;
            _jobRequisitionCandidateDTO.LocationID = jobRequisitionCandidateDTO.LocationID;
            _jobRequisitionCandidateDTO.PostalCode = jobRequisitionCandidateDTO.PostalCode;
            _jobRequisitionCandidateDTO.Summary = jobRequisitionCandidateDTO.Summary;
            _jobRequisitionCandidateDTO.CandidateEducationID = jobRequisitionCandidateDTO.CandidateEducationID;
            _jobRequisitionCandidateDTO.EducationTypeID = jobRequisitionCandidateDTO.EducationTypeID;
            _jobRequisitionCandidateDTO.Specialization = jobRequisitionCandidateDTO.Specialization;
            _jobRequisitionCandidateDTO.YearOfPassingFrom = jobRequisitionCandidateDTO.YearOfPassingFrom;
            _jobRequisitionCandidateDTO.YearOfPassingTo = jobRequisitionCandidateDTO.YearOfPassingTo;
            _jobRequisitionCandidateDTO.ExpectedSalaryFrom = jobRequisitionCandidateDTO.ExpectedSalaryFrom;
            _jobRequisitionCandidateDTO.ExpectedSalaryTo = jobRequisitionCandidateDTO.ExpectedSalaryTo;
            _jobRequisitionCandidateDTO.Nationality = jobRequisitionCandidateDTO.Nationality;
            _jobRequisitionCandidateDTO.WorkStatusFor = jobRequisitionCandidateDTO.WorkStatusFor;
            _jobRequisitionCandidateDTO.WorkPermitFor = jobRequisitionCandidateDTO.WorkPermitFor;
            _jobRequisitionCandidateDTO.Resume = jobRequisitionCandidateDTO.Resume;
            _jobRequisitionCandidateDTO.MoreInformationTypeID = jobRequisitionCandidateDTO.MoreInformationTypeID;
            _jobRequisitionCandidateDTO.MoreInformationTypeName = jobRequisitionCandidateDTO.MoreInformationTypeName;
            _jobRequisitionCandidateDTO.Description = jobRequisitionCandidateDTO.Description;

            _jobRequisitionCandidateDTO.IsActive = jobRequisitionCandidateDTO.IsActive;
            _jobRequisitionCandidateDTO.IsDeleted = jobRequisitionCandidateDTO.IsDeleted;
            _jobRequisitionCandidateDTO.CreatedBy = jobRequisitionCandidateDTO.CreatedBy;
            _jobRequisitionCandidateDTO.CreatedDate = System.DateTime.Now;
            _jobRequisitionCandidateDTO.ModifiedBy = jobRequisitionCandidateDTO.ModifiedBy;
            _jobRequisitionCandidateDTO.ModifiedDate = jobRequisitionCandidateDTO.ModifiedDate;

            return _jobRequisitionCandidateDTO;
        }
    }
}
