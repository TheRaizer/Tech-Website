﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using TechSiteAPI.Models;

namespace TechSiteAPI.Migrations
{
    [DbContext(typeof(TechDbContext))]
    [Migration("20210120145219_Changed Foreign key annotation in Order ref to OrderProduct")]
    partial class ChangedForeignkeyannotationinOrderreftoOrderProduct
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "3.1.0")
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("TechSiteAPI.Models.CD_LookUp", b =>
                {
                    b.Property<string>("CD_VAL")
                        .IsRequired()
                        .HasColumnType("nvarchar(3)");

                    b.Property<string>("DESC")
                        .IsRequired()
                        .HasColumnType("nvarchar(MAX)");

                    b.Property<string>("TYPE")
                        .IsRequired()
                        .HasColumnType("nvarchar(200)");

                    b.ToTable("CD_LKUP");
                });

            modelBuilder.Entity("TechSiteAPI.Models.Order", b =>
                {
                    b.Property<int>("ORD_ID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("DLIV_ADRR")
                        .IsRequired()
                        .HasColumnType("nvarchar(200)");

                    b.Property<DateTime>("ORD_DATE")
                        .HasColumnType("datetime2");

                    b.Property<string>("ORD_UUID")
                        .IsRequired()
                        .HasColumnType("nvarchar(36)");

                    b.Property<string>("STATUS_CD")
                        .IsRequired()
                        .HasColumnType("nvarchar(3)");

                    b.Property<int>("USER_ID")
                        .HasColumnType("int");

                    b.HasKey("ORD_ID");

                    b.HasIndex("USER_ID");

                    b.ToTable("ORDS");
                });

            modelBuilder.Entity("TechSiteAPI.Models.OrderProduct", b =>
                {
                    b.Property<int>("ORD_PRD_ID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<int>("ORD_ID")
                        .HasColumnType("int");

                    b.Property<float>("PAID_PRC")
                        .HasColumnType("real");

                    b.Property<string>("PAID_PROD_NM")
                        .IsRequired()
                        .HasColumnType("nvarchar(1000)");

                    b.Property<int>("PROD_ID")
                        .HasColumnType("int");

                    b.HasKey("ORD_PRD_ID");

                    b.HasIndex("ORD_ID");

                    b.HasIndex("PROD_ID");

                    b.ToTable("ORD_PRODS");
                });

            modelBuilder.Entity("TechSiteAPI.Models.Product", b =>
                {
                    b.Property<int>("PROD_ID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<float>("CURNT_PRC")
                        .HasColumnType("real");

                    b.Property<string>("PROD_CTGRY_CD")
                        .IsRequired()
                        .HasColumnType("nvarchar(3)");

                    b.Property<string>("PROD_DESC")
                        .IsRequired()
                        .HasColumnType("nvarchar(MAX)");

                    b.Property<string>("PROD_NAME")
                        .IsRequired()
                        .HasColumnType("nvarchar(200)");

                    b.Property<int>("PROD_NUM")
                        .HasColumnType("int");

                    b.Property<string>("PROD_VAL_TYPE_CD")
                        .IsRequired()
                        .HasColumnType("nvarchar(3)");

                    b.Property<int>("STOCK")
                        .HasColumnType("int");

                    b.HasKey("PROD_ID");

                    b.ToTable("PRODS");
                });

            modelBuilder.Entity("TechSiteAPI.Models.User", b =>
                {
                    b.Property<int>("USER_ID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("PASSWORD")
                        .HasColumnType("nvarchar(12)");

                    b.Property<string>("USERNAME")
                        .HasColumnType("nvarchar(15)");

                    b.Property<string>("USER_EMAIL")
                        .HasColumnType("nvarchar(320)");

                    b.HasKey("USER_ID");

                    b.ToTable("USERS");
                });

            modelBuilder.Entity("TechSiteAPI.Models.Order", b =>
                {
                    b.HasOne("TechSiteAPI.Models.User", null)
                        .WithMany("Orders")
                        .HasForeignKey("USER_ID")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("TechSiteAPI.Models.OrderProduct", b =>
                {
                    b.HasOne("TechSiteAPI.Models.Order", null)
                        .WithMany("OrderProducts")
                        .HasForeignKey("ORD_ID")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("TechSiteAPI.Models.Product", "Product")
                        .WithMany()
                        .HasForeignKey("PROD_ID")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });
#pragma warning restore 612, 618
        }
    }
}