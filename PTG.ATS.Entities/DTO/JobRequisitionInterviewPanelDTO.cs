using System;
using System.Collections.Generic;

namespace PTG.ATS.Entities
{
    public partial class JobRequisitionInterviewPanelDTO
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

        public virtual EmployeeDTO ApprovalDirector { get; set; }
        public virtual EmployeeDTO Ceo { get; set; }
        public virtual DesignationMasterDTO Designation { get; set; }
        public virtual EmployeeDTO Hrmanager { get; set; }
        public virtual InterviewRoundMasterDTO InterviewRound { get; set; }
        public virtual EmployeeDTO Interviewer { get; set; }
        public virtual JobRequisitionDTO JobRequisition { get; set; }
        public virtual LocationMasterDTO Location { get; set; }
        public virtual ModeOfInterviewMasterDTO ModeOfInterview { get; set; }
        public virtual EmployeeDTO Recruiter { get; set; }
        public virtual EmployeeDTO RecruitmentManager { get; set; }
    }
}
