using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text.Json.Serialization;
using System.Threading.Tasks;

namespace TechSiteAPI.Models
{
    public class OrderProduct
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption
        .Identity)]
        [Required]
        [JsonPropertyName("orderProductId")]
        public int ORD_PRD_ID { get; set; }

        [Required]
        public int PROD_ID { get; set; }//foreign key creating a relationship to the Products table

        [Required]
        public int ORD_ID { get; set; }//foreign key creating a relationship to the Orders table

        [Required]
        [JsonPropertyName("paidPrice")]
        public float PAID_PRC { get; set; }

        [Required]
        [Column(TypeName = "nvarchar(1000)")]
        [JsonPropertyName("paidProductName")]
        public string PAID_PROD_NM { get; set; }

        [ForeignKey("ORD_ID")]
        public virtual Order Order { get; set; }

        [ForeignKey("PROD_ID")]
        public virtual Product Product { get; set; }
    }
}
