using PTG.ATS.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace PTG.ATS.BLL
{
    public interface IJobRequisition
    {
        List<JobRequisitionDTO> GetJobRequisition();

        List<JobTitleMasterDTO> GetJobTitleDetails();

        List<EmploymentTypeMasterDTO> GetEmploymentType();

        List<DepartmentMasterDTO> GetDepartment();

        //CountryMasterDTO PostCountry(CountryMasterDTO countryDTO);

        List<RequisitionTemplateMasterDTO> GetRequisitionTemplates();

        JobRequisitionDTO SaveRequisition(JobRequisitionDTO jobRequisitionDTO);

        HiringStageMasterDTO PostHiring(HiringStageMasterDTO hiringStageMasterDTO);

    }
}
