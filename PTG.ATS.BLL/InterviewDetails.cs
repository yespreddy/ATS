using PTG.ATS.DAL.Models;
using PTG.ATS.Entities;
using System;
using System.Collections.Generic;
using System.Linq;

namespace PTG.ATS.BLL
{
    public class InterviewDetails
    {
        atsdevContext dbContext = new atsdevContext();
        ApplicationContext appContext = ApplicationContext.Instance;
        // Save Interviewdetails Templates 4th Screen
        public JobRequisitionInterviewPanelDTO SaveInterviewDetails(JobRequisitionInterviewPanelDTO interviewDTO)
        {
            try
            {
                if (interviewDTO != null)
                {
                    JobRequisitionInterviewPanel interviewpanelDTO = MapInterviewPanel(interviewDTO);

               
                    dbContext.Add(interviewpanelDTO);
                    dbContext.SaveChanges();
                    appContext.RefreshClaimMasterDataAsync();
                }
                return interviewDTO;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        private JobRequisitionInterviewPanel MapInterviewPanel(JobRequisitionInterviewPanelDTO interviewDTO)
        {
            JobRequisitionInterviewPanel _interviewpanelDTO = new JobRequisitionInterviewPanel();
            _interviewpanelDTO.JobRequisitionInterviewPanelId = interviewDTO.JobRequisitionInterviewPanelId;
            _interviewpanelDTO.JobRequisitionId = interviewDTO.JobRequisitionId;
            _interviewpanelDTO.InterviewerId = interviewDTO.InterviewerId;
            _interviewpanelDTO.InterviewerName = interviewDTO.InterviewerName;
            _interviewpanelDTO.DesignationId = interviewDTO.DesignationId;
            _interviewpanelDTO.LocationId = interviewDTO.LocationId;
            _interviewpanelDTO.ModeOfInterviewId = interviewDTO.ModeOfInterviewId;
            _interviewpanelDTO.InterviewRoundId = interviewDTO.InterviewRoundId;
            _interviewpanelDTO.RecruitmentManagerId = interviewDTO.RecruitmentManagerId;
            _interviewpanelDTO.IsShareWithRecruitmentManager = interviewDTO.IsShareWithRecruitmentManager;
            _interviewpanelDTO.RecruiterId = interviewDTO.RecruiterId;
            _interviewpanelDTO.IsShareWithRecruiter = interviewDTO.IsShareWithRecruiter;
            _interviewpanelDTO.InviteOthers = interviewDTO.InviteOthers;
            _interviewpanelDTO.IsShareWithInviteOthers = interviewDTO.IsShareWithInviteOthers;
            _interviewpanelDTO.HrmanagerId = interviewDTO.HrmanagerId;
            _interviewpanelDTO.IsShareWithHrmanager = interviewDTO.IsShareWithHrmanager;
            _interviewpanelDTO.ApprovalDirectorId = interviewDTO.ApprovalDirectorId;
            _interviewpanelDTO.IsApprovalFromDirector = interviewDTO.IsApprovalFromDirector;
            _interviewpanelDTO.Ceoid = interviewDTO.Ceoid;
            _interviewpanelDTO.IsApprovalFromCeo = interviewDTO.IsApprovalFromCeo;
            _interviewpanelDTO.IsActive = interviewDTO.IsActive;
            _interviewpanelDTO.IsDeleted = interviewDTO.IsDeleted;
            _interviewpanelDTO.CreatedBy = interviewDTO.CreatedBy;
            _interviewpanelDTO.CreatedDate =null;
            _interviewpanelDTO.ModifiedBy = interviewDTO.ModifiedBy;
            _interviewpanelDTO.ModifiedDate = null;

            return _interviewpanelDTO;
        }
    }
}