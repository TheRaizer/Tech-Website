using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace TechSiteAPI.Models
{
    public class Order
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption
        .Identity)]
        [Required]
        public int ORD_ID { get; set; }

        [Required]
        public int USER_ID { get; set; }//foreign key creating a relationship to the Users table

        [Required]
        public DateTime ORD_DATE { get; set; }

        [Required]
        [Column(TypeName = "nvarchar(200)")]
        public string STATUS_CD { get; set; }

        [Required]
        [Column(TypeName = "nvarchar(200)")]
        public string DLIV_ADRR { get; set; }

        [Required]
        [Column(TypeName = "nvarchar(36)")]
        public string ORD_UUID { get; set; }
        
        public virtual ICollection<OrderProduct> OrderProducts { get; set; }
    }
}
