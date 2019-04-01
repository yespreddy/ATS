//using PTG.ATS.DAL.Models;
//using PTG.ATS.Entities;
//using System.Collections.Generic;
//using System.Linq;

//namespace PTG.ATS.BLL
//{
//    public class InterviewDetails
//    {
//        atsdevContext dbContext = new atsdevContext();

//        public List<InterviewDTO> GetInterviewDetailsDetails()
//        {
//            return dbContext.Candidate.Select(x => new InterviewDTO
//            {
//                CandidateFirstName = x.CandidateFirstName,
//                CandidateLastName = x.CandidateLastName,
//                CandidateMiddleName = x.CandidateMiddleName,
//                CandidateId = x.CandidateId
//            }).ToList();
//        }
//    }
//}