using System;
using System.Collections.Generic;

namespace PTG.ATS.DAL.Models
{
    public partial class Employee
    {
        public Employee()
        {
            JobRequisitionApprover = new HashSet<JobRequisition>();
            JobRequisitionInterviewPanelApprovalDirector = new HashSet<JobRequisitionInterviewPanel>();
            JobRequisitionInterviewPanelCeo = new HashSet<JobRequisitionInterviewPanel>();
            JobRequisitionInterviewPanelHrmanager = new HashSet<JobRequisitionInterviewPanel>();
            JobRequisitionInterviewPanelInterviewer = new HashSet<JobRequisitionInterviewPanel>();
            JobRequisitionInterviewPanelRecruiter = new HashSet<JobRequisitionInterviewPanel>();
            JobRequisitionInterviewPanelRecruitmentManager = new HashSet<JobRequisitionInterviewPanel>();
            JobRequisitionReportingManager = new HashSet<JobRequisition>();
        }

        public int EmployeeId { get; set; }
        public string EmployeeFirstName { get; set; }
        public string EmployeeMiddleName { get; set; }
        public string EmployeeLastName { get; set; }
        public int DesignationId { get; set; }
        public int EmploymentTypeId { get; set; }
        public int DepartmentId { get; set; }
        public int CountryId { get; set; }
        public int StateId { get; set; }
        public int CityId { get; set; }
        public int LocationId { get; set; }
        public bool? IsActive { get; set; }
        public bool IsDeleted { get; set; }
        public string CreatedBy { get; set; }
        public DateTime? CreatedDate { get; set; }
        public string ModifiedBy { get; set; }
        public DateTime? ModifiedDate { get; set; }

        public virtual CityMaster City { get; set; }
        public virtual CountryMaster Country { get; set; }
        public virtual DepartmentMaster Department { get; set; }
        public virtual DesignationMaster Designation { get; set; }
        public virtual EmploymentTypeMaster EmploymentType { get; set; }
        public virtual LocationMaster Location { get; set; }
        public virtual StateMaster State { get; set; }
        public virtual ICollection<JobRequisition> JobRequisitionApprover { get; set; }
        public virtual ICollection<JobRequisitionInterviewPanel> JobRequisitionInterviewPanelApprovalDirector { get; set; }
        public virtual ICollection<JobRequisitionInterviewPanel> JobRequisitionInterviewPanelCeo { get; set; }
        public virtual ICollection<JobRequisitionInterviewPanel> JobRequisitionInterviewPanelHrmanager { get; set; }
        public virtual ICollection<JobRequisitionInterviewPanel> JobRequisitionInterviewPanelInterviewer { get; set; }
        public virtual ICollection<JobRequisitionInterviewPanel> JobRequisitionInterviewPanelRecruiter { get; set; }
        public virtual ICollection<JobRequisitionInterviewPanel> JobRequisitionInterviewPanelRecruitmentManager { get; set; }
        public virtual ICollection<JobRequisition> JobRequisitionReportingManager { get; set; }
    }
}
