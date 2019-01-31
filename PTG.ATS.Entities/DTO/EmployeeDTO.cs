using System;
using System.Collections.Generic;

namespace PTG.ATS.Entities
{
    public partial class EmployeeDTO
    {
        public EmployeeDTO()
        {
            JobRequisitionApprover = new HashSet<JobRequisitionDTO>();
            JobRequisitionInterviewPanelApprovalDirector = new HashSet<JobRequisitionInterviewPanelDTO>();
            JobRequisitionInterviewPanelCeo = new HashSet<JobRequisitionInterviewPanelDTO>();
            JobRequisitionInterviewPanelHrmanager = new HashSet<JobRequisitionInterviewPanelDTO>();
            JobRequisitionInterviewPanelInterviewer = new HashSet<JobRequisitionInterviewPanelDTO>();
            JobRequisitionInterviewPanelRecruiter = new HashSet<JobRequisitionInterviewPanelDTO>();
            JobRequisitionInterviewPanelRecruitmentManager = new HashSet<JobRequisitionInterviewPanelDTO>();
            JobRequisitionReportingManager = new HashSet<JobRequisitionDTO>();
        }

        public int EmployeeId { get; set; }
        public string EmployeeFirstName { get; set; }
        public string EmployeeMiddleName { get; set; }
        public string EmployeeLastName { get; set; }
        public int DesignationId { get; set; }
        public int EmploymentTypeId { get; set; }
        public int DepartmentId { get; set; }
        public bool? IsActive { get; set; }
        public bool IsDeleted { get; set; }
        public string CreatedBy { get; set; }
        public DateTime? CreatedDate { get; set; }
        public string ModifiedBy { get; set; }
        public DateTime? ModifiedDate { get; set; }

        public virtual DepartmentMasterDTO Department { get; set; }
        public virtual DesignationMasterDTO Designation { get; set; }
        public virtual EmploymentTypeMasterDTO EmploymentType { get; set; }
        public virtual ICollection<JobRequisitionDTO> JobRequisitionApprover { get; set; }
        public virtual ICollection<JobRequisitionInterviewPanelDTO> JobRequisitionInterviewPanelApprovalDirector { get; set; }
        public virtual ICollection<JobRequisitionInterviewPanelDTO> JobRequisitionInterviewPanelCeo { get; set; }
        public virtual ICollection<JobRequisitionInterviewPanelDTO> JobRequisitionInterviewPanelHrmanager { get; set; }
        public virtual ICollection<JobRequisitionInterviewPanelDTO> JobRequisitionInterviewPanelInterviewer { get; set; }
        public virtual ICollection<JobRequisitionInterviewPanelDTO> JobRequisitionInterviewPanelRecruiter { get; set; }
        public virtual ICollection<JobRequisitionInterviewPanelDTO> JobRequisitionInterviewPanelRecruitmentManager { get; set; }
        public virtual ICollection<JobRequisitionDTO> JobRequisitionReportingManager { get; set; }
    }
}
