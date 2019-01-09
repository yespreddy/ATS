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

        public virtual DbSet<Address> Address { get; set; }
        public virtual DbSet<Answers> Answers { get; set; }
        public virtual DbSet<Country> Country { get; set; }
        public virtual DbSet<Department> Department { get; set; }
        public virtual DbSet<Designation> Designation { get; set; }
        public virtual DbSet<District> District { get; set; }
        public virtual DbSet<Employee> Employee { get; set; }
        public virtual DbSet<EmploymentType> EmploymentType { get; set; }
        public virtual DbSet<Experience> Experience { get; set; }
        public virtual DbSet<InterviewMode> InterviewMode { get; set; }
        public virtual DbSet<InterviewPannel> InterviewPannel { get; set; }
        public virtual DbSet<JobRequirement> JobRequirement { get; set; }
        public virtual DbSet<KeyWord> KeyWord { get; set; }
        public virtual DbSet<Preliminary> Preliminary { get; set; }
        public virtual DbSet<Quections> Quections { get; set; }
        public virtual DbSet<Requisition> Requisition { get; set; }
        public virtual DbSet<Role> Role { get; set; }
        public virtual DbSet<State> State { get; set; }
        public virtual DbSet<User> User { get; set; }
        public virtual DbSet<UserLog> UserLog { get; set; }
        public virtual DbSet<Visibility> Visibility { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. See http://go.microsoft.com/fwlink/?LinkId=723263 for guidance on storing connection strings.

                optionsBuilder.UseSqlServer("Server=atsdev.database.windows.net;Database=atsdev;user id=atsadmindev;password=M@rtjack@007");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Address>(entity =>
            {
                entity.Property(e => e.Address1)
                    .IsRequired()
                    .HasColumnName("Address 1")
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.CreatedDate).HasColumnType("datetime");

                entity.Property(e => e.ModifiedDate).HasColumnType("datetime");

                entity.Property(e => e.Postcode)
                    .IsRequired()
                    .HasColumnName("postcode")
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.HasOne(d => d.District)
                    .WithMany(p => p.Address)
                    .HasForeignKey(d => d.DistrictId)
                    .HasConstraintName("FK__Address__Distric__5535A963");
            });

            modelBuilder.Entity<Answers>(entity =>
            {
                entity.HasKey(e => e.AnsId);

                entity.Property(e => e.AnsId).HasColumnName("AnsID");

                entity.Property(e => e.Answers1)
                    .HasColumnName("Answers")
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.CreatedDate).HasColumnType("datetime");

                entity.Property(e => e.ModifiedDate).HasColumnType("datetime");
            });

            modelBuilder.Entity<Country>(entity =>
            {
                entity.Property(e => e.CountryId).HasColumnName("CountryID");

                entity.Property(e => e.CountryName)
                    .IsRequired()
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.CreatedDate).HasColumnType("datetime");

                entity.Property(e => e.ModifiedDate).HasColumnType("datetime");
            });

            modelBuilder.Entity<Department>(entity =>
            {
                entity.HasKey(e => e.DeptId);

                entity.Property(e => e.DeptId).HasColumnName("DeptID");

                entity.Property(e => e.CreatedDate).HasColumnType("datetime");

                entity.Property(e => e.DeptName)
                    .IsRequired()
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.ModifiedDate).HasColumnType("datetime");
            });

            modelBuilder.Entity<Designation>(entity =>
            {
                entity.HasKey(e => e.DesId);

                entity.Property(e => e.DesId).HasColumnName("DesID");

                entity.Property(e => e.CreatedDate).HasColumnType("datetime");

                entity.Property(e => e.DesignationName)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.ModifiedDate).HasColumnType("datetime");
            });

            modelBuilder.Entity<District>(entity =>
            {
                entity.Property(e => e.CreatedDate).HasColumnType("datetime");

                entity.Property(e => e.DistrictName)
                    .IsRequired()
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.ModifiedDate).HasColumnType("datetime");

                entity.HasOne(d => d.State)
                    .WithMany(p => p.District)
                    .HasForeignKey(d => d.StateId)
                    .HasConstraintName("FK__district__StateI__4F7CD00D");
            });

            modelBuilder.Entity<Employee>(entity =>
            {
                entity.HasKey(e => e.EmpId);

                entity.Property(e => e.EmpId).HasColumnName("EmpID");

                entity.Property(e => e.CreatedDate).HasColumnType("datetime");

                entity.Property(e => e.Email)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.EmpFirstName)
                    .IsRequired()
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.EmpLastName)
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.ModifiedDate).HasColumnType("datetime");

                entity.HasOne(d => d.Role)
                    .WithMany(p => p.Employee)
                    .HasForeignKey(d => d.Roleid)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__Employee__Roleid__656C112C");
            });

            modelBuilder.Entity<EmploymentType>(entity =>
            {
                entity.HasKey(e => e.EmpTypeId);

                entity.Property(e => e.EmpTypeId).HasColumnName("EmpTypeID");

                entity.Property(e => e.CreatedDate).HasColumnType("datetime");

                entity.Property(e => e.EmpTypeName)
                    .IsRequired()
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.ModifiedDate).HasColumnType("datetime");
            });

            modelBuilder.Entity<Experience>(entity =>
            {
                entity.HasKey(e => e.ExpId);

                entity.Property(e => e.ExpId).HasColumnName("ExpID");

                entity.Property(e => e.CreatedDate).HasColumnType("datetime");

                entity.Property(e => e.Experience1)
                    .HasColumnName("Experience")
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.ModifiedDate).HasColumnType("datetime");
            });

            modelBuilder.Entity<InterviewMode>(entity =>
            {
                entity.HasKey(e => e.IntId);

                entity.Property(e => e.IntId).HasColumnName("IntID");

                entity.Property(e => e.CreatedDate).HasColumnType("datetime");

                entity.Property(e => e.IntMod)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.ModifiedDate).HasColumnType("datetime");
            });

            modelBuilder.Entity<InterviewPannel>(entity =>
            {
                entity.HasKey(e => e.InterPannelId);

                entity.ToTable("InterviewPannel", "Requisition");

                entity.Property(e => e.InterPannelId).HasColumnName("interPannelID");

                entity.Property(e => e.Ceo).HasColumnName("CEO");

                entity.Property(e => e.EmpId).HasColumnName("EmpID");

                entity.Property(e => e.Hrmanager).HasColumnName("HRManager");

                entity.Property(e => e.InviteOther)
                    .HasMaxLength(500)
                    .IsUnicode(false);

                entity.HasOne(d => d.CeoNavigation)
                    .WithMany(p => p.InterviewPannelCeoNavigation)
                    .HasForeignKey(d => d.Ceo)
                    .HasConstraintName("FK__InterviewPa__CEO__5BAD9CC8");

                entity.HasOne(d => d.ChooseRoundNavigation)
                    .WithMany(p => p.InterviewPannelChooseRoundNavigation)
                    .HasForeignKey(d => d.ChooseRound)
                    .HasConstraintName("FK__Interview__Choos__57DD0BE4");

                entity.HasOne(d => d.DesignationNavigation)
                    .WithMany(p => p.InterviewPannel)
                    .HasForeignKey(d => d.Designation)
                    .HasConstraintName("FK__Interview__Desig__55009F39");

                entity.HasOne(d => d.DirectorNavigation)
                    .WithMany(p => p.InterviewPannelDirectorNavigation)
                    .HasForeignKey(d => d.Director)
                    .HasConstraintName("FK__Interview__Direc__5AB9788F");

                entity.HasOne(d => d.Emp)
                    .WithMany(p => p.InterviewPannelEmp)
                    .HasForeignKey(d => d.EmpId)
                    .HasConstraintName("FK__Interview__EmpID__540C7B00");

                entity.HasOne(d => d.LocationNavigation)
                    .WithMany(p => p.InterviewPannel)
                    .HasForeignKey(d => d.Location)
                    .HasConstraintName("FK__Interview__Locat__55F4C372");

                entity.HasOne(d => d.ModeOfInterviewNavigation)
                    .WithMany(p => p.InterviewPannelModeOfInterviewNavigation)
                    .HasForeignKey(d => d.ModeOfInterview)
                    .HasConstraintName("FK__Interview__ModeO__56E8E7AB");

                entity.HasOne(d => d.Pre)
                    .WithMany(p => p.InterviewPannel)
                    .HasForeignKey(d => d.PreId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__Interview__PreId__531856C7");

                entity.HasOne(d => d.RecruiterNavigation)
                    .WithMany(p => p.InterviewPannelRecruiterNavigation)
                    .HasForeignKey(d => d.Recruiter)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__Interview__Recru__59C55456");

                entity.HasOne(d => d.RecruitmentManagerNavigation)
                    .WithMany(p => p.InterviewPannelRecruitmentManagerNavigation)
                    .HasForeignKey(d => d.RecruitmentManager)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__Interview__Recru__58D1301D");
            });

            modelBuilder.Entity<JobRequirement>(entity =>
            {
                entity.HasKey(e => e.Jrid);

                entity.Property(e => e.Jrid).HasColumnName("JRID");

                entity.Property(e => e.CreatedDate).HasColumnType("datetime");

                entity.Property(e => e.JobRequirementName)
                    .IsRequired()
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.ModifiedDate).HasColumnType("datetime");
            });

            modelBuilder.Entity<KeyWord>(entity =>
            {
                entity.HasKey(e => e.Kwid);

                entity.Property(e => e.Kwid).HasColumnName("KWId");

                entity.Property(e => e.CreatedDate).HasColumnType("datetime");

                entity.Property(e => e.Kwname)
                    .IsRequired()
                    .HasColumnName("KWName")
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.ModifiedDate).HasColumnType("datetime");
            });

            modelBuilder.Entity<Preliminary>(entity =>
            {
                entity.HasKey(e => e.PreId);

                entity.ToTable("Preliminary", "Requisition");

                entity.Property(e => e.DevelopmentOrsupport).HasColumnName("DevelopmentORSupport");

                entity.Property(e => e.Email)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.FirstName)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.LastName)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.PresentCustomer)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.Qid).HasColumnName("QID");

                entity.Property(e => e.ReqId).HasColumnName("ReqID");

                entity.Property(e => e.RequisitionName)
                    .IsRequired()
                    .HasMaxLength(150)
                    .IsUnicode(false);

                entity.Property(e => e.RolePreference)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.HasOne(d => d.PositionAppliedForNavigation)
                    .WithMany(p => p.Preliminary)
                    .HasForeignKey(d => d.PositionAppliedFor)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__Prelimina__Posit__503BEA1C");

                entity.HasOne(d => d.Q)
                    .WithMany(p => p.Preliminary)
                    .HasForeignKey(d => d.Qid)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__Preliminary__QID__4F47C5E3");

                entity.HasOne(d => d.RelevExpNavigation)
                    .WithMany(p => p.PreliminaryRelevExpNavigation)
                    .HasForeignKey(d => d.RelevExp)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__Prelimina__Relev__4E53A1AA");

                entity.HasOne(d => d.Req)
                    .WithMany(p => p.Preliminary)
                    .HasForeignKey(d => d.ReqId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__Prelimina__ReqID__4C6B5938");

                entity.HasOne(d => d.TotalExpNavigation)
                    .WithMany(p => p.PreliminaryTotalExpNavigation)
                    .HasForeignKey(d => d.TotalExp)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__Prelimina__Total__4D5F7D71");
            });

            modelBuilder.Entity<Quections>(entity =>
            {
                entity.HasKey(e => e.Qid);

                entity.Property(e => e.Qid).HasColumnName("QID");

                entity.Property(e => e.AnsId).HasColumnName("AnsID");

                entity.Property(e => e.CreatedDate).HasColumnType("datetime");

                entity.Property(e => e.ModifiedDate).HasColumnType("datetime");

                entity.Property(e => e.Quections1)
                    .HasColumnName("Quections")
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.HasOne(d => d.Ans)
                    .WithMany(p => p.Quections)
                    .HasForeignKey(d => d.AnsId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__Quections__AnsID__7F2BE32F");
            });

            modelBuilder.Entity<Requisition>(entity =>
            {
                entity.HasKey(e => e.ReqId);

                entity.ToTable("Requisition", "Requisition");

                entity.Property(e => e.ReqId).HasColumnName("ReqID");

                entity.Property(e => e.CreatedDate).HasColumnType("datetime");

                entity.Property(e => e.EmpTypeId).HasColumnName("EmpTypeID");

                entity.Property(e => e.ExpId).HasColumnName("ExpID");

                entity.Property(e => e.HiringClose).HasColumnType("date");

                entity.Property(e => e.JobDesc).IsUnicode(false);

                entity.Property(e => e.Jrdesc)
                    .HasColumnName("JRDesc")
                    .IsUnicode(false);

                entity.Property(e => e.Jrid).HasColumnName("JRID");

                entity.Property(e => e.ModifiedDate).HasColumnType("datetime");

                entity.Property(e => e.RequisitionName)
                    .IsRequired()
                    .HasMaxLength(150)
                    .IsUnicode(false);

                entity.Property(e => e.SalaryRangeFrom).HasColumnType("decimal(10, 5)");

                entity.Property(e => e.SalaryRangeTo).HasColumnType("decimal(10, 5)");

                entity.Property(e => e.VisibilityHrhead).HasColumnName("VisibilityHRHead");

                entity.HasOne(d => d.Country)
                    .WithMany(p => p.Requisition)
                    .HasForeignKey(d => d.Countryid)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__Requisiti__Count__0C85DE4D");

                entity.HasOne(d => d.Dept)
                    .WithMany(p => p.Requisition)
                    .HasForeignKey(d => d.DeptId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__Requisiti__DeptI__0E6E26BF");

                entity.HasOne(d => d.EmpType)
                    .WithMany(p => p.Requisition)
                    .HasForeignKey(d => d.EmpTypeId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__Requisiti__EmpTy__0D7A0286");

                entity.HasOne(d => d.Exp)
                    .WithMany(p => p.Requisition)
                    .HasForeignKey(d => d.ExpId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__Requisiti__ExpID__0F624AF8");

                entity.HasOne(d => d.Jr)
                    .WithMany(p => p.Requisition)
                    .HasForeignKey(d => d.Jrid)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__Requisitio__JRID__10566F31");
            });

            modelBuilder.Entity<Role>(entity =>
            {
                entity.Property(e => e.RoleId).HasColumnName("RoleID");

                entity.Property(e => e.CreatedDate).HasColumnType("datetime");

                entity.Property(e => e.ModifiedDate).HasColumnType("datetime");

                entity.Property(e => e.RoleName)
                    .HasMaxLength(100)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<State>(entity =>
            {
                entity.Property(e => e.CountryId).HasColumnName("CountryID");

                entity.Property(e => e.CreatedDate).HasColumnType("datetime");

                entity.Property(e => e.ModifiedDate).HasColumnType("datetime");

                entity.Property(e => e.StateName)
                    .IsRequired()
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.HasOne(d => d.Country)
                    .WithMany(p => p.State)
                    .HasForeignKey(d => d.CountryId)
                    .HasConstraintName("FK__State__CountryID__4CA06362");
            });

            modelBuilder.Entity<User>(entity =>
            {
                entity.Property(e => e.UserId).HasColumnName("UserID");

                entity.Property(e => e.CreatedDate).HasColumnType("datetime");

                entity.Property(e => e.ModifiedDate).HasColumnType("datetime");

                entity.Property(e => e.Password)
                    .IsRequired()
                    .HasMaxLength(20)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<UserLog>(entity =>
            {
                entity.HasKey(e => e.LogId);

                entity.Property(e => e.CreatedDate).HasColumnType("datetime");

                entity.Property(e => e.LogInTime).HasColumnType("datetime");

                entity.Property(e => e.LogoutTime).HasColumnType("datetime");

                entity.Property(e => e.ModifiedDate).HasColumnType("datetime");

                entity.Property(e => e.UserId).HasColumnName("UserID");

                entity.HasOne(d => d.User)
                    .WithMany(p => p.UserLog)
                    .HasForeignKey(d => d.UserId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__UserLog__UserID__619B8048");
            });

            modelBuilder.Entity<Visibility>(entity =>
            {
                entity.HasKey(e => e.Vid);

                entity.Property(e => e.Vid).HasColumnName("VID");

                entity.Property(e => e.CreatedDate).HasColumnType("datetime");

                entity.Property(e => e.ModifiedDate).HasColumnType("datetime");

                entity.Property(e => e.VisibilityName)
                    .IsRequired()
                    .HasMaxLength(100)
                    .IsUnicode(false);
            });
        }
    }
}
