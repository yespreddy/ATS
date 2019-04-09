using System;
using System.Collections.Generic;
using System.Text;

namespace PTG.ATS.Entities
{
    public class OtherQuestionMasterDTO: IBaseEntity
    {
        public int OtherQuestionId { get; set; }
        public string OtherQuestionText { get; set; }
        public string Description { get; set; }
        public bool? IsActive { get; set; }
        public bool IsDeleted { get; set; }
        public string CreatedBy { get; set; }
        public DateTime? CreatedDate { get; set; }
        public string ModifiedBy { get; set; }
        public DateTime? ModifiedDate { get; set; }
    }
}
