using PTG.ATS.Entities;
using PTG.ATS.Entities.DTO;
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

        JobRequisitionSaveDTO SaveRequisition(JobRequisitionSaveDTO jobRequisitionDTO);

        HiringStageMasterDTO PostHiring(HiringStageMasterDTO hiringStageMasterDTO);

    }
}
