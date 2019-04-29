using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace PTG.ATS.DAL.Models
{
    public partial class atsdevContext : DbContext
    {
        public atsdevContext()
        {
        }

        public atsdevContext(DbContextOptions<atsdevContext> options)
            : base(options)
        {
        }

        public virtual DbSet<CandidateEducation> CandidateEducation { get; set; }
        public virtual DbSet<CandidateMoreInformation> CandidateMoreInformation { get; set; }
        public virtual DbSet<CityMaster> CityMaster { get; set; }
        public virtual DbSet<CountryMaster> CountryMaster { get; set; }
        public virtual DbSet<DepartmentMaster> DepartmentMaster { get; set; }
        public virtual DbSet<DesignationMaster> DesignationMaster { get; set; }
        public virtual DbSet<EducationTypeMaster> EducationTypeMaster { get; set; }
        public virtual DbSet<Employee> Employee { get; set; }
        public virtual DbSet<EmploymentTypeMaster> EmploymentTypeMaster { get; set; }
        public virtual DbSet<ExperienceMaster> ExperienceMaster { get; set; }
        public virtual DbSet<HiringStageMaster> HiringStageMaster { get; set; }
        public virtual DbSet<HiringStageSubStageLinkMaster> HiringStageSubStageLinkMaster { get; set; }
        public virtual DbSet<HiringStagesWorkflowMaster> HiringStagesWorkflowMaster { get; set; }
        public virtual DbSet<HrquestionMaster> HrquestionMaster { get; set; }
        public virtual DbSet<InterviewRoundMaster> InterviewRoundMaster { get; set; }
        public virtual DbSet<JobRequirementJustificationMaster> JobRequirementJustificationMaster { get; set; }
        public virtual DbSet<JobRequisition> JobRequisition { get; set; }
        public virtual DbSet<JobRequisitionCandidate> JobRequisitionCandidate { get; set; }
        public virtual DbSet<JobRequisitionHiring> JobRequisitionHiring { get; set; }
        public virtual DbSet<JobRequisitionHiringStageSubStageLink> JobRequisitionHiringStageSubStageLink { get; set; }
        public virtual DbSet<JobRequisitionInterviewPanel> JobRequisitionInterviewPanel { get; set; }
        public virtual DbSet<JobRequisitionPreliminaryQuestionnaire> JobRequisitionPreliminaryQuestionnaire { get; set; }
        public virtual DbSet<JobRequisitionPreliminaryQuestionnaireHrquestion> JobRequisitionPreliminaryQuestionnaireHrquestion { get; set; }
        public virtual DbSet<JobRequisitionPreliminaryQuestionnaireOtherQuestion> JobRequisitionPreliminaryQuestionnaireOtherQuestion { get; set; }
        public virtual DbSet<JobTitleMaster> JobTitleMaster { get; set; }
        public virtual DbSet<LocationMaster> LocationMaster { get; set; }
        public virtual DbSet<ModeOfInterviewMaster> ModeOfInterviewMaster { get; set; }
        public virtual DbSet<MoreInformationTypeMaster> MoreInformationTypeMaster { get; set; }
        public virtual DbSet<OtherQuestionMaster> OtherQuestionMaster { get; set; }
        public virtual DbSet<QuestionnairePreviewMaster> QuestionnairePreviewMaster { get; set; }
        public virtual DbSet<RequisitionTemplateMaster> RequisitionTemplateMaster { get; set; }
        public virtual DbSet<StateMaster> StateMaster { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. See http://go.microsoft.com/fwlink/?LinkId=723263 for guidance on storing connection strings.
                optionsBuilder.UseSqlServer("Server=atsdev.database.windows.net;Database=atsdev;user id=atsadmindev;password=M@rtjack@007;");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.HasAnnotation("ProductVersion", "2.2.1-servicing-10028");

            modelBuilder.Entity<CandidateEducation>(entity =>
            {
                entity.Property(e => e.CandidateEducationId).HasColumnName("CandidateEducationID");

                entity.Property(e => e.CreatedBy)
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.CreatedDate).HasColumnType("datetime");

                entity.Property(e => e.EducationTypeId).HasColumnName("EducationTypeID");

                entity.Property(e => e.IsActive)
                    .IsRequired()
                    .HasDefaultValueSql("((1))");

                entity.Property(e => e.JobRequisitionCandidateId).HasColumnName("JobRequisitionCandidateID");

                entity.Property(e => e.ModifiedBy)
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.ModifiedDate).HasColumnType("datetime");

                entity.Property(e => e.Specialization)
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.YearOfPassingFrom)
                    .HasMaxLength(10)
                    .IsUnicode(false);

                entity.Property(e => e.YearOfPassingTo)
                    .HasMaxLength(10)
                    .IsUnicode(false);

                entity.HasOne(d => d.EducationType)
                    .WithMany(p => p.CandidateEducation)
                    .HasForeignKey(d => d.EducationTypeId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__CandidateEducation__EducationTypeID");

                entity.HasOne(d => d.JobRequisitionCandidate)
                    .WithMany(p => p.CandidateEducation)
                    .HasForeignKey(d => d.JobRequisitionCandidateId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__CandidateEducation__JobRequisitionCandidateID");
            });

            modelBuilder.Entity<CandidateMoreInformation>(entity =>
            {
                entity.Property(e => e.CandidateMoreInformationId).HasColumnName("CandidateMoreInformationID");

                entity.Property(e => e.CreatedBy)
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.CreatedDate).HasColumnType("datetime");

                entity.Property(e => e.IsActive)
                    .IsRequired()
                    .HasDefaultValueSql("((1))");

                entity.Property(e => e.JobRequisitionCandidateId).HasColumnName("JobRequisitionCandidateID");

                entity.Property(e => e.ModifiedBy)
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.ModifiedDate).HasColumnType("datetime");

                entity.Property(e => e.MoreInformationTypeId).HasColumnName("MoreInformationTypeID");

                entity.HasOne(d => d.JobRequisitionCandidate)
                    .WithMany(p => p.CandidateMoreInformation)
                    .HasForeignKey(d => d.JobRequisitionCandidateId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__CandidateMoreInformation__JobRequisitionCandidateID");

                entity.HasOne(d => d.MoreInformationType)
                    .WithMany(p => p.CandidateMoreInformation)
                    .HasForeignKey(d => d.MoreInformationTypeId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__CandidateMoreInformation__MoreInformationTypeID");
            });

            modelBuilder.Entity<CityMaster>(entity =>
            {
                entity.HasKey(e => e.CityId);

                entity.Property(e => e.CityId).HasColumnName("CityID");

                entity.Property(e => e.CreatedBy)
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.CreatedDate).HasColumnType("datetime");

                entity.Property(e => e.IsActive)
                    .IsRequired()
                    .HasDefaultValueSql("((1))");

                entity.Property(e => e.ModifiedBy)
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.ModifiedDate).HasColumnType("datetime");

                entity.Property(e => e.Name).HasMaxLength(50);

                entity.Property(e => e.StateId).HasColumnName("StateID");

                entity.HasOne(d => d.State)
                    .WithMany(p => p.CityMaster)
                    .HasForeignKey(d => d.StateId)
                    .HasConstraintName("FK_CityMaster_StateMaster");
            });

            modelBuilder.Entity<CountryMaster>(entity =>
            {
                entity.HasKey(e => e.CountryId);

                entity.Property(e => e.CountryId).HasColumnName("CountryID");

                entity.Property(e => e.CountryCode)
                    .HasMaxLength(5)
                    .IsUnicode(false);

                entity.Property(e => e.CreatedBy)
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.CreatedDate).HasColumnType("datetime");

                entity.Property(e => e.IsActive)
                    .IsRequired()
                    .HasDefaultValueSql("((1))");

                entity.Property(e => e.ModifiedBy)
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.ModifiedDate).HasColumnType("datetime");

                entity.Property(e => e.Name).HasMaxLength(50);
            });

            modelBuilder.Entity<DepartmentMaster>(entity =>
            {
                entity.HasKey(e => e.DepartmentId)
                    .HasName("PK_Department");

                entity.Property(e => e.DepartmentId).HasColumnName("DepartmentID");

                entity.Property(e => e.CreatedBy)
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.CreatedDate).HasColumnType("datetime");

                entity.Property(e => e.DepartmentName)
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.Description).IsUnicode(false);

                entity.Property(e => e.IsActive)
                    .IsRequired()
                    .HasDefaultValueSql("((1))");

                entity.Property(e => e.ModifiedBy)
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.ModifiedDate).HasColumnType("datetime");

                entity.Property(e => e.RequisitionTemplateId).HasColumnName("RequisitionTemplateID");

                entity.HasOne(d => d.RequisitionTemplate)
                    .WithMany(p => p.DepartmentMaster)
                    .HasForeignKey(d => d.RequisitionTemplateId)
                    .HasConstraintName("FK__Departmen__Requi__1B9317B3");
            });

            modelBuilder.Entity<DesignationMaster>(entity =>
            {
                entity.HasKey(e => e.DesignationId)
                    .HasName("PK_Designation");

                entity.Property(e => e.DesignationId).HasColumnName("DesignationID");

                entity.Property(e => e.CreatedBy)
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.CreatedDate).HasColumnType("datetime");

                entity.Property(e => e.Description).IsUnicode(false);

                entity.Property(e => e.DesignationName)
                    .HasMaxLength(150)
                    .IsUnicode(false);

                entity.Property(e => e.IsActive)
                    .IsRequired()
                    .HasDefaultValueSql("((1))");

                entity.Property(e => e.ModifiedBy)
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.ModifiedDate).HasColumnType("datetime");
            });

            modelBuilder.Entity<EducationTypeMaster>(entity =>
            {
                entity.HasKey(e => e.EducationTypeId)
                    .HasName("PK_EducationType");

                entity.Property(e => e.EducationTypeId).HasColumnName("EducationTypeID");

                entity.Property(e => e.CreatedBy)
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.CreatedDate).HasColumnType("datetime");

                entity.Property(e => e.Description).IsUnicode(false);

                entity.Property(e => e.EducationTypeName)
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.IsActive)
                    .IsRequired()
                    .HasDefaultValueSql("((1))");

                entity.Property(e => e.ModifiedBy)
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.ModifiedDate).HasColumnType("datetime");
            });

            modelBuilder.Entity<Employee>(entity =>
            {
                entity.Property(e => e.EmployeeId).HasColumnName("EmployeeID");

                entity.Property(e => e.CityId).HasColumnName("CityID");

                entity.Property(e => e.CountryId).HasColumnName("CountryID");

                entity.Property(e => e.CreatedBy)
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.CreatedDate).HasColumnType("datetime");

                entity.Property(e => e.DepartmentId).HasColumnName("DepartmentID");

                entity.Property(e => e.DesignationId).HasColumnName("DesignationID");

                entity.Property(e => e.EmployeeFirstName)
                    .IsRequired()
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.EmployeeLastName)
                    .IsRequired()
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.EmployeeMiddleName)
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.EmploymentTypeId).HasColumnName("EmploymentTypeID");

                entity.Property(e => e.IsActive)
                    .IsRequired()
                    .HasDefaultValueSql("((1))");

                entity.Property(e => e.LocationId).HasColumnName("LocationID");

                entity.Property(e => e.ModifiedBy)
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.ModifiedDate).HasColumnType("datetime");

                entity.Property(e => e.StateId).HasColumnName("StateID");

                entity.HasOne(d => d.City)
                    .WithMany(p => p.Employee)
                    .HasForeignKey(d => d.CityId)
                    .HasConstraintName("FK__Employee__City__0B5CAFEA");

                entity.HasOne(d => d.Country)
                    .WithMany(p => p.Employee)
                    .HasForeignKey(d => d.CountryId)
                    .HasConstraintName("FK__Employee__Country__0B5CAFEA");

                entity.HasOne(d => d.Department)
                    .WithMany(p => p.Employee)
                    .HasForeignKey(d => d.DepartmentId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__Employee__Depart__0B5CAFEA");

                entity.HasOne(d => d.Designation)
                    .WithMany(p => p.Employee)
                    .HasForeignKey(d => d.DesignationId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__Employee__Design__503BEA1C");

                entity.HasOne(d => d.EmploymentType)
                    .WithMany(p => p.Employee)
                    .HasForeignKey(d => d.EmploymentTypeId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__Employee__Employ__57DD0BE4");

                entity.HasOne(d => d.Location)
                    .WithMany(p => p.Employee)
                    .HasForeignKey(d => d.LocationId)
                    .HasConstraintName("FK__Employee__Location__0B5CAFEA");

                entity.HasOne(d => d.State)
                    .WithMany(p => p.Employee)
                    .HasForeignKey(d => d.StateId)
                    .HasConstraintName("FK__Employee__State__0B5CAFEA");
            });

            modelBuilder.Entity<EmploymentTypeMaster>(entity =>
            {
                entity.HasKey(e => e.EmploymentTypeId)
                    .HasName("PK_EmploymentType");

                entity.Property(e => e.EmploymentTypeId).HasColumnName("EmploymentTypeID");

                entity.Property(e => e.CreatedBy)
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.CreatedDate).HasColumnType("datetime");

                entity.Property(e => e.Description).IsUnicode(false);

                entity.Property(e => e.EmploymentTypeName)
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.IsActive)
                    .IsRequired()
                    .HasDefaultValueSql("((1))");

                entity.Property(e => e.ModifiedBy)
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.ModifiedDate).HasColumnType("datetime");
            });

            modelBuilder.Entity<ExperienceMaster>(entity =>
            {
                entity.HasKey(e => e.ExperienceId)
                    .HasName("PK_Experience");

                entity.Property(e => e.ExperienceId).HasColumnName("ExperienceID");

                entity.Property(e => e.CreatedBy)
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.CreatedDate).HasColumnType("datetime");

                entity.Property(e => e.Description).IsUnicode(false);

                entity.Property(e => e.ExperienceName)
                    .HasMaxLength(150)
                    .IsUnicode(false);

                entity.Property(e => e.IsActive)
                    .IsRequired()
                    .HasDefaultValueSql("((1))");

                entity.Property(e => e.ModifiedBy)
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.ModifiedDate).HasColumnType("datetime");
            });

            modelBuilder.Entity<HiringStageMaster>(entity =>
            {
                entity.HasKey(e => e.HiringStageId)
                    .HasName("PK_HiringStage");

                entity.Property(e => e.HiringStageId).HasColumnName("HiringStageID");

                entity.Property(e => e.CreatedBy)
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.CreatedDate).HasColumnType("datetime");

                entity.Property(e => e.Description).IsUnicode(false);

                entity.Property(e => e.HiringStageName)
                    .IsRequired()
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.IsActive)
                    .IsRequired()
                    .HasDefaultValueSql("((1))");

                entity.Property(e => e.ModifiedBy)
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.ModifiedDate).HasColumnType("datetime");
            });

            modelBuilder.Entity<HiringStageSubStageLinkMaster>(entity =>
            {
                entity.Property(e => e.HiringStageSubStageLinkMasterId).HasColumnName("HiringStageSubStageLinkMasterID");

                entity.Property(e => e.CreatedBy)
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.CreatedDate).HasColumnType("datetime");

                entity.Property(e => e.HiringStageId).HasColumnName("HiringStageID");

                entity.Property(e => e.HiringStagesWorkflowId).HasColumnName("HiringStagesWorkflowID");

                entity.Property(e => e.IsActive)
                    .IsRequired()
                    .HasDefaultValueSql("((1))");

                entity.Property(e => e.ModifiedBy)
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.ModifiedDate).HasColumnType("datetime");

                entity.HasOne(d => d.HiringStage)
                    .WithMany(p => p.HiringStageSubStageLinkMaster)
                    .HasForeignKey(d => d.HiringStageId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__HiringStageSubStageLinkMaster1__HiringStageID");

                entity.HasOne(d => d.HiringStagesWorkflow)
                    .WithMany(p => p.HiringStageSubStageLinkMaster)
                    .HasForeignKey(d => d.HiringStagesWorkflowId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__HiringStageSubStageLinkMaster1__HiringStagesWorkflowID");
            });

            modelBuilder.Entity<HiringStagesWorkflowMaster>(entity =>
            {
                entity.HasKey(e => e.HiringStagesWorkflowId)
                    .HasName("PK_HiringStagesWorkflow");

                entity.Property(e => e.HiringStagesWorkflowId).HasColumnName("HiringStagesWorkflowID");

                entity.Property(e => e.CreatedBy)
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.CreatedDate).HasColumnType("datetime");

                entity.Property(e => e.Description).IsUnicode(false);

                entity.Property(e => e.HiringStagesWorkflowName)
                    .IsRequired()
                    .HasMaxLength(150)
                    .IsUnicode(false);

                entity.Property(e => e.IsActive)
                    .IsRequired()
                    .HasDefaultValueSql("((1))");

                entity.Property(e => e.ModifiedBy)
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.ModifiedDate).HasColumnType("datetime");
            });

            modelBuilder.Entity<HrquestionMaster>(entity =>
            {
                entity.HasKey(e => e.HrquestionId);

                entity.ToTable("HRQuestionMaster");

                entity.Property(e => e.HrquestionId).HasColumnName("HRQuestionID");

                entity.Property(e => e.CreatedBy)
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.CreatedDate).HasColumnType("datetime");

                entity.Property(e => e.Description).IsUnicode(false);

                entity.Property(e => e.HrquestionText)
                    .IsRequired()
                    .HasColumnName("HRQuestionText")
                    .HasMaxLength(150)
                    .IsUnicode(false);

                entity.Property(e => e.IsActive)
                    .IsRequired()
                    .HasDefaultValueSql("((1))");

                entity.Property(e => e.ModifiedBy)
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.ModifiedDate).HasColumnType("datetime");
            });

            modelBuilder.Entity<InterviewRoundMaster>(entity =>
            {
                entity.HasKey(e => e.InterviewRoundId)
                    .HasName("PK_InterviewRound");

                entity.Property(e => e.InterviewRoundId).HasColumnName("InterviewRoundID");

                entity.Property(e => e.CreatedBy)
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.CreatedDate).HasColumnType("datetime");

                entity.Property(e => e.Description).IsUnicode(false);

                entity.Property(e => e.InterviewRoundName)
                    .IsRequired()
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.IsActive)
                    .IsRequired()
                    .HasDefaultValueSql("((1))");

                entity.Property(e => e.ModifiedBy)
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.ModifiedDate).HasColumnType("datetime");
            });

            modelBuilder.Entity<JobRequirementJustificationMaster>(entity =>
            {
                entity.HasKey(e => e.JobRequirementJustificationId)
                    .HasName("PK_JobRequirementJustification");

                entity.Property(e => e.JobRequirementJustificationId).HasColumnName("JobRequirementJustificationID");

                entity.Property(e => e.CreatedBy)
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.CreatedDate).HasColumnType("datetime");

                entity.Property(e => e.Description).IsUnicode(false);

                entity.Property(e => e.IsActive)
                    .IsRequired()
                    .HasDefaultValueSql("((1))");

                entity.Property(e => e.JobRequirementJustificationName)
                    .HasMaxLength(150)
                    .IsUnicode(false);

                entity.Property(e => e.ModifiedBy)
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.ModifiedDate).HasColumnType("datetime");
            });

            modelBuilder.Entity<JobRequisition>(entity =>
            {
                entity.Property(e => e.JobRequisitionId).HasColumnName("JobRequisitionID");

                entity.Property(e => e.ApproverId).HasColumnName("ApproverID");

                entity.Property(e => e.CityId).HasColumnName("CityID");

                entity.Property(e => e.CountryId).HasColumnName("CountryID");

                entity.Property(e => e.CreatedBy)
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.CreatedDate).HasColumnType("datetime");

                entity.Property(e => e.DepartmentId).HasColumnName("DepartmentID");

                entity.Property(e => e.EmploymentTypeId).HasColumnName("EmploymentTypeID");

                entity.Property(e => e.Experience)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.HiringCloseDate).HasColumnType("datetime");

                entity.Property(e => e.IsActive)
                    .IsRequired()
                    .HasDefaultValueSql("((1))");

                entity.Property(e => e.IsVisibilityForHrmanager).HasColumnName("IsVisibilityForHRManager");

                entity.Property(e => e.JobDescription)
                    .IsRequired()
                    .IsUnicode(false);

                entity.Property(e => e.JobRequirementJustificationComments).IsUnicode(false);

                entity.Property(e => e.JobRequirementJustificationId).HasColumnName("JobRequirementJustificationID");

                entity.Property(e => e.JobTitleId).HasColumnName("JobTitleID");

                entity.Property(e => e.LocationId).HasColumnName("LocationID");

                entity.Property(e => e.ModifiedBy)
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.ModifiedDate).HasColumnType("datetime");

                entity.Property(e => e.PostalCode)
                    .IsRequired()
                    .HasMaxLength(10)
                    .IsUnicode(false);

                entity.Property(e => e.ReportingManagerId).HasColumnName("ReportingManagerID");

                entity.Property(e => e.RequisitionTemplateId).HasColumnName("RequisitionTemplateID");

                entity.Property(e => e.SalaryRangeFrom).HasColumnType("money");

                entity.Property(e => e.SalaryRangeTo).HasColumnType("money");

                entity.Property(e => e.StateId).HasColumnName("StateID");

                entity.HasOne(d => d.Approver)
                    .WithMany(p => p.JobRequisitionApprover)
                    .HasForeignKey(d => d.ApproverId)
                    .HasConstraintName("FK__JobRequis__Appro__46B27FE2");

                entity.HasOne(d => d.City)
                    .WithMany(p => p.JobRequisition)
                    .HasForeignKey(d => d.CityId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__JobRequis__CityI__25518C17");

                entity.HasOne(d => d.Country)
                    .WithMany(p => p.JobRequisition)
                    .HasForeignKey(d => d.CountryId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__JobRequis__Count__236943A5");

                entity.HasOne(d => d.Department)
                    .WithMany(p => p.JobRequisition)
                    .HasForeignKey(d => d.DepartmentId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__JobRequis__Depar__2CF2ADDF");

                entity.HasOne(d => d.EmploymentType)
                    .WithMany(p => p.JobRequisition)
                    .HasForeignKey(d => d.EmploymentTypeId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__JobRequis__Emplo__2DE6D218");

                entity.HasOne(d => d.JobRequirementJustification)
                    .WithMany(p => p.JobRequisition)
                    .HasForeignKey(d => d.JobRequirementJustificationId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__JobRequis__JobRe__2EDAF651");

                entity.HasOne(d => d.JobTitle)
                    .WithMany(p => p.JobRequisition)
                    .HasForeignKey(d => d.JobTitleId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__JobRequis__JobTi__2739D489");

                entity.HasOne(d => d.Location)
                    .WithMany(p => p.JobRequisition)
                    .HasForeignKey(d => d.LocationId)
                    .HasConstraintName("FK__JobRequis__Locat__44CA3770");

                entity.HasOne(d => d.ReportingManager)
                    .WithMany(p => p.JobRequisitionReportingManager)
                    .HasForeignKey(d => d.ReportingManagerId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__JobRequis__Repor__45BE5BA9");

                entity.HasOne(d => d.RequisitionTemplate)
                    .WithMany(p => p.JobRequisition)
                    .HasForeignKey(d => d.RequisitionTemplateId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__JobRequis__Requi__2645B050");

                entity.HasOne(d => d.State)
                    .WithMany(p => p.JobRequisition)
                    .HasForeignKey(d => d.StateId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__JobRequis__State__245D67DE");
            });

            modelBuilder.Entity<JobRequisitionCandidate>(entity =>
            {
                entity.Property(e => e.JobRequisitionCandidateId).HasColumnName("JobRequisitionCandidateID");

                entity.Property(e => e.Address).IsUnicode(false);

                entity.Property(e => e.CityId).HasColumnName("CityID");

                entity.Property(e => e.CreatedBy)
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.CreatedDate).HasColumnType("datetime");

                entity.Property(e => e.Email)
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.ExpectedSalaryFrom).HasColumnType("money");

                entity.Property(e => e.ExpectedSalaryTo).HasColumnType("money");

                entity.Property(e => e.FirstName)
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.IsActive)
                    .IsRequired()
                    .HasDefaultValueSql("((1))");

                entity.Property(e => e.JobRequisitionId).HasColumnName("JobRequisitionID");

                entity.Property(e => e.LastName)
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.LocationId).HasColumnName("LocationID");

                entity.Property(e => e.MiddleName)
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.ModifiedBy)
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.ModifiedDate).HasColumnType("datetime");

                entity.Property(e => e.Nationality)
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.Phone)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.PostalCode)
                    .IsRequired()
                    .HasMaxLength(10)
                    .IsUnicode(false);

                entity.Property(e => e.Resume).IsUnicode(false);

                entity.Property(e => e.StateId).HasColumnName("StateID");

                entity.Property(e => e.Summary).IsUnicode(false);

                entity.Property(e => e.WorkPermitFor)
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.WorkStatusFor)
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.HasOne(d => d.City)
                    .WithMany(p => p.JobRequisitionCandidate)
                    .HasForeignKey(d => d.CityId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__JobRequisitionCandidate__CityID");

                entity.HasOne(d => d.JobRequisition)
                    .WithMany(p => p.JobRequisitionCandidate)
                    .HasForeignKey(d => d.JobRequisitionId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__JobRequisitionCandidate__JobRequisitionID");

                entity.HasOne(d => d.Location)
                    .WithMany(p => p.JobRequisitionCandidate)
                    .HasForeignKey(d => d.LocationId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__JobRequisitionCandidate__LocationID");

                entity.HasOne(d => d.State)
                    .WithMany(p => p.JobRequisitionCandidate)
                    .HasForeignKey(d => d.StateId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__JobRequisitionCandidate__StateID");
            });

            modelBuilder.Entity<JobRequisitionHiring>(entity =>
            {
                entity.Property(e => e.JobRequisitionHiringId).HasColumnName("JobRequisitionHiringID");

                entity.Property(e => e.CreatedBy)
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.CreatedDate).HasColumnType("datetime");

                entity.Property(e => e.HiringStageId).HasColumnName("HiringStageID");

                entity.Property(e => e.HiringStagesWorkflowId).HasColumnName("HiringStagesWorkflowID");

                entity.Property(e => e.IsActive)
                    .IsRequired()
                    .HasDefaultValueSql("((1))");

                entity.Property(e => e.JobRequisitionId).HasColumnName("JobRequisitionID");

                entity.Property(e => e.ModifiedBy)
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.ModifiedDate).HasColumnType("datetime");

                entity.HasOne(d => d.HiringStage)
                    .WithMany(p => p.JobRequisitionHiring)
                    .HasForeignKey(d => d.HiringStageId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__JobRequis__Hirin__4D5F7D71");

                entity.HasOne(d => d.HiringStagesWorkflow)
                    .WithMany(p => p.JobRequisitionHiring)
                    .HasForeignKey(d => d.HiringStagesWorkflowId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__JobRequis__Hirin__4E53A1AA");

                entity.HasOne(d => d.JobRequisition)
                    .WithMany(p => p.JobRequisitionHiring)
                    .HasForeignKey(d => d.JobRequisitionId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__JobRequis__JobRe__4C6B5938");
            });

            modelBuilder.Entity<JobRequisitionHiringStageSubStageLink>(entity =>
            {
                entity.HasKey(e => e.JobRequisitionHiringStageSubStageLinkMasterId);

                entity.Property(e => e.JobRequisitionHiringStageSubStageLinkMasterId).HasColumnName("JobRequisitionHiringStageSubStageLinkMasterID");

                entity.Property(e => e.CreatedBy)
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.CreatedDate).HasColumnType("datetime");

                entity.Property(e => e.HiringStageId).HasColumnName("HiringStageID");

                entity.Property(e => e.HiringStagesWorkflowId).HasColumnName("HiringStagesWorkflowID");

                entity.Property(e => e.IsActive)
                    .IsRequired()
                    .HasDefaultValueSql("((1))");

                entity.Property(e => e.ModifiedBy)
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.ModifiedDate).HasColumnType("datetime");

                entity.Property(e => e.RequisitionTemplateId).HasColumnName("RequisitionTemplateID");

                entity.HasOne(d => d.HiringStage)
                    .WithMany(p => p.JobRequisitionHiringStageSubStageLink)
                    .HasForeignKey(d => d.HiringStageId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__HiringStageSubStageLinkMaster__HiringStageID");

                entity.HasOne(d => d.HiringStagesWorkflow)
                    .WithMany(p => p.JobRequisitionHiringStageSubStageLink)
                    .HasForeignKey(d => d.HiringStagesWorkflowId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__HiringStageSubStageLinkMaster__HiringStagesWorkflowID");

                entity.HasOne(d => d.RequisitionTemplate)
                    .WithMany(p => p.JobRequisitionHiringStageSubStageLink)
                    .HasForeignKey(d => d.RequisitionTemplateId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__HiringStageSubStageLinkMaster__RequisitionTemplateID");
            });

            modelBuilder.Entity<JobRequisitionInterviewPanel>(entity =>
            {
                entity.Property(e => e.JobRequisitionInterviewPanelId).HasColumnName("JobRequisitionInterviewPanelID");

                entity.Property(e => e.ApprovalDirectorId).HasColumnName("ApprovalDirectorID");

                entity.Property(e => e.Ceoid).HasColumnName("CEOID");

                entity.Property(e => e.CreatedBy)
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.CreatedDate).HasColumnType("datetime");

                entity.Property(e => e.DesignationId).HasColumnName("DesignationID");

                entity.Property(e => e.HrmanagerId).HasColumnName("HRManagerID");

                entity.Property(e => e.InterviewRoundId).HasColumnName("InterviewRoundID");

                entity.Property(e => e.InterviewerId).HasColumnName("InterviewerID");

                entity.Property(e => e.InterviewerName)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.InviteOthers)
                    .HasMaxLength(250)
                    .IsUnicode(false);

                entity.Property(e => e.IsActive)
                    .IsRequired()
                    .HasDefaultValueSql("((1))");

                entity.Property(e => e.IsApprovalFromCeo).HasColumnName("IsApprovalFromCEO");

                entity.Property(e => e.IsShareWithHrmanager).HasColumnName("IsShareWithHRManager");

                entity.Property(e => e.JobRequisitionId).HasColumnName("JobRequisitionID");

                entity.Property(e => e.LocationId).HasColumnName("LocationID");

                entity.Property(e => e.ModeOfInterviewId).HasColumnName("ModeOfInterviewID");

                entity.Property(e => e.ModifiedBy)
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.ModifiedDate).HasColumnType("datetime");

                entity.Property(e => e.RecruiterId).HasColumnName("RecruiterID");

                entity.Property(e => e.RecruitmentManagerId).HasColumnName("RecruitmentManagerID");

                entity.HasOne(d => d.ApprovalDirector)
                    .WithMany(p => p.JobRequisitionInterviewPanelApprovalDirector)
                    .HasForeignKey(d => d.ApprovalDirectorId)
                    .HasConstraintName("FK__JobRequis__Appro__6166761E");

                entity.HasOne(d => d.Ceo)
                    .WithMany(p => p.JobRequisitionInterviewPanelCeo)
                    .HasForeignKey(d => d.Ceoid)
                    .HasConstraintName("FK__JobRequis__CEOID__625A9A57");

                entity.HasOne(d => d.Designation)
                    .WithMany(p => p.JobRequisitionInterviewPanel)
                    .HasForeignKey(d => d.DesignationId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__JobRequis__Desig__59C55456");

                entity.HasOne(d => d.Hrmanager)
                    .WithMany(p => p.JobRequisitionInterviewPanelHrmanager)
                    .HasForeignKey(d => d.HrmanagerId)
                    .HasConstraintName("FK__JobRequis__HRMan__607251E5");

                entity.HasOne(d => d.InterviewRound)
                    .WithMany(p => p.JobRequisitionInterviewPanel)
                    .HasForeignKey(d => d.InterviewRoundId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__JobRequis__Inter__5CA1C101");

                entity.HasOne(d => d.Interviewer)
                    .WithMany(p => p.JobRequisitionInterviewPanelInterviewer)
                    .HasForeignKey(d => d.InterviewerId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__JobRequis__Inter__719CDDE7");

                entity.HasOne(d => d.JobRequisition)
                    .WithMany(p => p.JobRequisitionInterviewPanel)
                    .HasForeignKey(d => d.JobRequisitionId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__JobRequis__JobRe__58D1301D");

                entity.HasOne(d => d.Location)
                    .WithMany(p => p.JobRequisitionInterviewPanel)
                    .HasForeignKey(d => d.LocationId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__JobRequis__Locat__5AB9788F");

                entity.HasOne(d => d.ModeOfInterview)
                    .WithMany(p => p.JobRequisitionInterviewPanel)
                    .HasForeignKey(d => d.ModeOfInterviewId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__JobRequis__ModeO__5BAD9CC8");

                entity.HasOne(d => d.Recruiter)
                    .WithMany(p => p.JobRequisitionInterviewPanelRecruiter)
                    .HasForeignKey(d => d.RecruiterId)
                    .HasConstraintName("FK__JobRequis__Recru__5E8A0973");

                entity.HasOne(d => d.RecruitmentManager)
                    .WithMany(p => p.JobRequisitionInterviewPanelRecruitmentManager)
                    .HasForeignKey(d => d.RecruitmentManagerId)
                    .HasConstraintName("FK__JobRequis__Recru__5D95E53A");
            });

            modelBuilder.Entity<JobRequisitionPreliminaryQuestionnaire>(entity =>
            {
                entity.Property(e => e.JobRequisitionPreliminaryQuestionnaireId).HasColumnName("JobRequisitionPreliminaryQuestionnaireID");

                entity.Property(e => e.AlternativeMobileNumber)
                    .IsRequired()
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.CreatedBy)
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.CreatedDate).HasColumnType("datetime");

                entity.Property(e => e.Email)
                    .IsRequired()
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.FirstName)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.GenerateAcustomLink)
                    .HasColumnName("GenerateACustomLink")
                    .HasMaxLength(150)
                    .IsUnicode(false);

                entity.Property(e => e.IsActive)
                    .IsRequired()
                    .HasDefaultValueSql("((1))");

                entity.Property(e => e.JobRequisitionId).HasColumnName("JobRequisitionID");

                entity.Property(e => e.LastName)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.MiddleName)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.MobileNumber)
                    .IsRequired()
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.ModifiedBy)
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.ModifiedDate).HasColumnType("datetime");

                entity.Property(e => e.PositionAppliedId).HasColumnName("PositionAppliedID");

                entity.Property(e => e.PresentCustomer)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.RelevantExperience)
                    .IsRequired()
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.RolePreference)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.TotalExperience)
                    .IsRequired()
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.HasOne(d => d.JobRequisition)
                    .WithMany(p => p.JobRequisitionPreliminaryQuestionnaire)
                    .HasForeignKey(d => d.JobRequisitionId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__JobRequis__JobRe__72910220");

                entity.HasOne(d => d.PositionApplied)
                    .WithMany(p => p.JobRequisitionPreliminaryQuestionnaire)
                    .HasForeignKey(d => d.PositionAppliedId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__JobRequis__Posit__73852659");
            });

            modelBuilder.Entity<JobRequisitionPreliminaryQuestionnaireHrquestion>(entity =>
            {
                entity.HasKey(e => e.QuestionnairePreviewHrquestionId)
                    .HasName("PK_QuestionnairePreviewHRQuestion");

                entity.ToTable("JobRequisitionPreliminaryQuestionnaireHRQuestion");

                entity.Property(e => e.QuestionnairePreviewHrquestionId).HasColumnName("QuestionnairePreviewHRQuestionID");

                entity.Property(e => e.AnswerText)
                    .IsRequired()
                    .IsUnicode(false);

                entity.Property(e => e.CreatedBy)
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.CreatedDate).HasColumnType("datetime");

                entity.Property(e => e.HrquestionId).HasColumnName("HRQuestionID");

                entity.Property(e => e.IsActive)
                    .IsRequired()
                    .HasDefaultValueSql("((1))");

                entity.Property(e => e.JobRequisitionPreliminaryQuestionnaireId).HasColumnName("JobRequisitionPreliminaryQuestionnaireID");

                entity.Property(e => e.ModifiedBy)
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.ModifiedDate).HasColumnType("datetime");

                entity.HasOne(d => d.Hrquestion)
                    .WithMany(p => p.JobRequisitionPreliminaryQuestionnaireHrquestion)
                    .HasForeignKey(d => d.HrquestionId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_QuestionnairePreviewHRQuestion_HRQuestionID");

                entity.HasOne(d => d.JobRequisitionPreliminaryQuestionnaire)
                    .WithMany(p => p.JobRequisitionPreliminaryQuestionnaireHrquestion)
                    .HasForeignKey(d => d.JobRequisitionPreliminaryQuestionnaireId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_QuestionnairePreviewHRQuestion_JobRequisitionPreliminaryQuestionnaireID");
            });

            modelBuilder.Entity<JobRequisitionPreliminaryQuestionnaireOtherQuestion>(entity =>
            {
                entity.HasKey(e => e.QuestionnairePreviewOtherQuestionId)
                    .HasName("PK_QuestionnairePreviewOtherQuestion");

                entity.Property(e => e.QuestionnairePreviewOtherQuestionId).HasColumnName("QuestionnairePreviewOtherQuestionID");

                entity.Property(e => e.AnswerText)
                    .IsRequired()
                    .IsUnicode(false);

                entity.Property(e => e.CreatedBy)
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.CreatedDate).HasColumnType("datetime");

                entity.Property(e => e.IsActive)
                    .IsRequired()
                    .HasDefaultValueSql("((1))");

                entity.Property(e => e.JobRequisitionPreliminaryQuestionnaireId).HasColumnName("JobRequisitionPreliminaryQuestionnaireID");

                entity.Property(e => e.ModifiedBy)
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.ModifiedDate).HasColumnType("datetime");

                entity.Property(e => e.OtherQuestionId).HasColumnName("OtherQuestionID");

                entity.HasOne(d => d.JobRequisitionPreliminaryQuestionnaire)
                    .WithMany(p => p.JobRequisitionPreliminaryQuestionnaireOtherQuestion)
                    .HasForeignKey(d => d.JobRequisitionPreliminaryQuestionnaireId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_QuestionnairePreviewOtherQuestion_JobRequisitionPreliminaryQuestionnaireID");

                entity.HasOne(d => d.OtherQuestion)
                    .WithMany(p => p.JobRequisitionPreliminaryQuestionnaireOtherQuestion)
                    .HasForeignKey(d => d.OtherQuestionId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_QuestionnairePreviewOtherQuestion_OtherQuestionID");
            });

            modelBuilder.Entity<JobTitleMaster>(entity =>
            {
                entity.HasKey(e => e.JobTitleId)
                    .HasName("PK_JobTitle");

                entity.Property(e => e.JobTitleId).HasColumnName("JobTitleID");

                entity.Property(e => e.CreatedBy)
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.CreatedDate).HasColumnType("datetime");

                entity.Property(e => e.Description).IsUnicode(false);

                entity.Property(e => e.IsActive)
                    .IsRequired()
                    .HasDefaultValueSql("((1))");

                entity.Property(e => e.JobTitleName)
                    .HasMaxLength(150)
                    .IsUnicode(false);

                entity.Property(e => e.ModifiedBy)
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.ModifiedDate).HasColumnType("datetime");

                entity.Property(e => e.RequisitionTemplateId).HasColumnName("RequisitionTemplateID");

                entity.HasOne(d => d.RequisitionTemplate)
                    .WithMany(p => p.JobTitleMaster)
                    .HasForeignKey(d => d.RequisitionTemplateId)
                    .HasConstraintName("FK__JobTitleM__Requi__14E61A24");
            });

            modelBuilder.Entity<LocationMaster>(entity =>
            {
                entity.HasKey(e => e.LocationId);

                entity.Property(e => e.LocationId).HasColumnName("LocationID");

                entity.Property(e => e.CityId).HasColumnName("CityID");

                entity.Property(e => e.CreatedBy)
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.CreatedDate).HasColumnType("datetime");

                entity.Property(e => e.IsActive)
                    .IsRequired()
                    .HasDefaultValueSql("((1))");

                entity.Property(e => e.ModifiedBy)
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.ModifiedDate).HasColumnType("datetime");

                entity.Property(e => e.Name)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.PostalCode)
                    .HasMaxLength(10)
                    .IsUnicode(false);

                entity.HasOne(d => d.City)
                    .WithMany(p => p.LocationMaster)
                    .HasForeignKey(d => d.CityId)
                    .HasConstraintName("FK__LocationM__CityI__3587F3E0");
            });

            modelBuilder.Entity<ModeOfInterviewMaster>(entity =>
            {
                entity.HasKey(e => e.ModeOfInterviewId)
                    .HasName("PK_ModeOfInterview");

                entity.Property(e => e.ModeOfInterviewId).HasColumnName("ModeOfInterviewID");

                entity.Property(e => e.CreatedBy)
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.CreatedDate).HasColumnType("datetime");

                entity.Property(e => e.Description).IsUnicode(false);

                entity.Property(e => e.IsActive)
                    .IsRequired()
                    .HasDefaultValueSql("((1))");

                entity.Property(e => e.ModeOfInterviewName)
                    .IsRequired()
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.ModifiedBy)
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.ModifiedDate).HasColumnType("datetime");
            });

            modelBuilder.Entity<MoreInformationTypeMaster>(entity =>
            {
                entity.HasKey(e => e.MoreInformationTypeId)
                    .HasName("PK_MoreInformationType");

                entity.Property(e => e.MoreInformationTypeId).HasColumnName("MoreInformationTypeID");

                entity.Property(e => e.CreatedBy)
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.CreatedDate).HasColumnType("datetime");

                entity.Property(e => e.Description).IsUnicode(false);

                entity.Property(e => e.IsActive)
                    .IsRequired()
                    .HasDefaultValueSql("((1))");

                entity.Property(e => e.ModifiedBy)
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.ModifiedDate).HasColumnType("datetime");

                entity.Property(e => e.MoreInformationTypeName)
                    .IsRequired()
                    .HasMaxLength(100)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<OtherQuestionMaster>(entity =>
            {
                entity.HasKey(e => e.OtherQuestionId);

                entity.Property(e => e.OtherQuestionId).HasColumnName("OtherQuestionID");

                entity.Property(e => e.CreatedBy)
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.CreatedDate).HasColumnType("datetime");

                entity.Property(e => e.Description).IsUnicode(false);

                entity.Property(e => e.IsActive)
                    .IsRequired()
                    .HasDefaultValueSql("((1))");

                entity.Property(e => e.ModifiedBy)
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.ModifiedDate).HasColumnType("datetime");

                entity.Property(e => e.OtherQuestionText)
                    .IsRequired()
                    .HasMaxLength(150)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<QuestionnairePreviewMaster>(entity =>
            {
                entity.HasKey(e => e.QuestionnairePreviewId)
                    .HasName("PK_QuestionnairePreview");

                entity.Property(e => e.QuestionnairePreviewId).HasColumnName("QuestionnairePreviewID");

                entity.Property(e => e.CreatedBy)
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.CreatedDate).HasColumnType("datetime");

                entity.Property(e => e.Description).IsUnicode(false);

                entity.Property(e => e.IsActive)
                    .IsRequired()
                    .HasDefaultValueSql("((1))");

                entity.Property(e => e.IsDeleted)
                    .IsRequired()
                    .HasDefaultValueSql("((1))");

                entity.Property(e => e.ModifiedBy)
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.ModifiedDate).HasColumnType("datetime");

                entity.Property(e => e.QuestionnairePreviewLocation)
                    .HasMaxLength(250)
                    .IsUnicode(false);

                entity.Property(e => e.RequisitionTemplateId).HasColumnName("RequisitionTemplateID");

                entity.HasOne(d => d.RequisitionTemplate)
                    .WithMany(p => p.QuestionnairePreviewMaster)
                    .HasForeignKey(d => d.RequisitionTemplateId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__Questionn__Requi__74794A92");
            });

            modelBuilder.Entity<RequisitionTemplateMaster>(entity =>
            {
                entity.HasKey(e => e.RequisitionTemplateId);

                entity.Property(e => e.RequisitionTemplateId).HasColumnName("RequisitionTemplateID");

                entity.Property(e => e.CreatedBy)
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.CreatedDate).HasColumnType("datetime");

                entity.Property(e => e.Description).IsUnicode(false);

                entity.Property(e => e.IsActive)
                    .IsRequired()
                    .HasDefaultValueSql("((1))");

                entity.Property(e => e.ModifiedBy)
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.ModifiedDate).HasColumnType("datetime");

                entity.Property(e => e.RequisitionTemplateName)
                    .HasMaxLength(150)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<StateMaster>(entity =>
            {
                entity.HasKey(e => e.StateId);

                entity.Property(e => e.StateId).HasColumnName("StateID");

                entity.Property(e => e.CountryId).HasColumnName("CountryID");

                entity.Property(e => e.CreatedBy)
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.CreatedDate).HasColumnType("datetime");

                entity.Property(e => e.IsActive)
                    .IsRequired()
                    .HasDefaultValueSql("((1))");

                entity.Property(e => e.ModifiedBy)
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.ModifiedDate).HasColumnType("datetime");

                entity.Property(e => e.Name).HasMaxLength(50);

                entity.HasOne(d => d.Country)
                    .WithMany(p => p.StateMaster)
                    .HasForeignKey(d => d.CountryId)
                    .HasConstraintName("FK_StateMaster_CountryMaster");
            });
        }
    }
}
