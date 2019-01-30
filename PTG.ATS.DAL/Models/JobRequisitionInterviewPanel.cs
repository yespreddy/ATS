using System;
using System.Collections.Generic;

namespace PTG.ATS.DAL.Models
{
    public partial class JobRequisitionInterviewPanel
    {
        public int JobRequisitionInterviewPanelId { get; set; }
        public int JobRequisitionId { get; set; }
        public int InterviewerId { get; set; }
        public string InterviewerName { get; set; }
        public int DesignationId { get; set; }
        public int LocationId { get; set; }
        public int ModeOfInterviewId { get; set; }
        public int InterviewRoundId { get; set; }
        public int? RecruitmentManagerId { get; set; }
        public bool IsShareWithRecruitmentManager { get; set; }
        public int? RecruiterId { get; set; }
        public bool IsShareWithRecruiter { get; set; }
        public string InviteOthers { get; set; }
        public bool IsShareWithInviteOthers { get; set; }
        public int? HrmanagerId { get; set; }
        public bool IsShareWithHrmanager { get; set; }
        public int? ApprovalDirectorId { get; set; }
        public bool IsApprovalFromDirector { get; set; }
        public int? Ceoid { get; set; }
        public bool IsApprovalFromCeo { get; set; }
        public bool? IsActive { get; set; }
        public bool IsDeleted { get; set; }
        public string CreatedBy { get; set; }
        public DateTime? CreatedDate { get; set; }
        public string ModifiedBy { get; set; }
        public DateTime? ModifiedDate { get; set; }

        public virtual Employee ApprovalDirector { get; set; }
        public virtual Employee Ceo { get; set; }
        public virtual DesignationMaster Designation { get; set; }
        public virtual Employee Hrmanager { get; set; }
        public virtual InterviewRoundMaster InterviewRound { get; set; }
        public virtual Employee Interviewer { get; set; }
        public virtual JobRequisition JobRequisition { get; set; }
        public virtual LocationMaster Location { get; set; }
        public virtual ModeOfInterviewMaster ModeOfInterview { get; set; }
        public virtual Employee Recruiter { get; set; }
        public virtual Employee RecruitmentManager { get; set; }
    }
}
