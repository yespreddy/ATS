using System;
using System.Collections.Generic;

namespace PTG.ATS.DAL.Models
{
    public partial class JobRequisition
    {
        public JobRequisition()
        {
            JobRequisitionHiring = new HashSet<JobRequisitionHiring>();
            JobRequisitionInterviewPanel = new HashSet<JobRequisitionInterviewPanel>();
            JobRequisitionPreliminaryQuestionnaire = new HashSet<JobRequisitionPreliminaryQuestionnaire>();
        }

        public int JobRequisitionId { get; set; }
        public int RequisitionTemplateId { get; set; }
        public int CountryId { get; set; }
        public int StateId { get; set; }
        public int CityId { get; set; }
        public int? LocationId { get; set; }
        public string PostalCode { get; set; }
        public int JobTitleId { get; set; }
        public int NoOfPositions { get; set; }
        public int EmploymentTypeId { get; set; }
        public int DepartmentId { get; set; }
        public string Experience { get; set; }
        public int ReportingManagerId { get; set; }
        public string JobDescription { get; set; }
        public DateTime HiringCloseDate { get; set; }
        public int JobRequirementJustificationId { get; set; }
        public string JobRequirementJustificationComments { get; set; }
        public decimal? SalaryRangeFrom { get; set; }
        public decimal? SalaryRangeTo { get; set; }
        public int? ApproverId { get; set; }
        public bool IsVisibilityForRecruitmentHead { get; set; }
        public bool IsVisibilityForHrmanager { get; set; }
        public bool? IsActive { get; set; }
        public bool IsDeleted { get; set; }
        public string CreatedBy { get; set; }
        public DateTime? CreatedDate { get; set; }
        public string ModifiedBy { get; set; }
        public DateTime? ModifiedDate { get; set; }

        public virtual Employee Approver { get; set; }
        public virtual CityMaster City { get; set; }
        public virtual CountryMaster Country { get; set; }
        public virtual DepartmentMaster Department { get; set; }
        public virtual EmploymentTypeMaster EmploymentType { get; set; }
        public virtual JobRequirementJustificationMaster JobRequirementJustification { get; set; }
        public virtual JobTitleMaster JobTitle { get; set; }
        public virtual LocationMaster Location { get; set; }
        public virtual Employee ReportingManager { get; set; }
        public virtual RequisitionTemplateMaster RequisitionTemplate { get; set; }
        public virtual StateMaster State { get; set; }
        public virtual ICollection<JobRequisitionHiring> JobRequisitionHiring { get; set; }
        public virtual ICollection<JobRequisitionInterviewPanel> JobRequisitionInterviewPanel { get; set; }
        public virtual ICollection<JobRequisitionPreliminaryQuestionnaire> JobRequisitionPreliminaryQuestionnaire { get; set; }
    }
}
