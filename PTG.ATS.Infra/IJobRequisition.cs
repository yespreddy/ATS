using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using PTG.ATS.Entities;


namespace PTG.ATS.Infra
{

    public interface IJobRequisition
    {
        List<JobRequisitionDTO> GetJobRequisition();

        CountryMasterDTO PostCountry(CountryMasterDTO countryDTO);
        HiringStageMasterDTO PostHiringstage(HiringStageMasterDTO hiringStageMasterDTO);


        List<RequisitionTemplateMasterDTO> GetRequisitionTemplates();
        JobRequisitionDTO SaveRequisition(JobRequisitionDTO jobRequisitionDTO);
    }
}