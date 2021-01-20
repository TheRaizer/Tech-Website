using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace TechSiteAPI.Models
{
    public class Order
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption
        .Identity)]
        [Required]
        [JsonPropertyName("orderId")]
        public int ORD_ID { get; set; }

        [Required]
        [JsonPropertyName("userId")]
        public int USER_ID { get; set; }//foreign key creating a relationship to the Users table

        [Required]
        [JsonPropertyName("orderDate")]
        public DateTime ORD_DATE { get; set; }

        [Required]
        [Column(TypeName = "nvarchar(3)")]
        [JsonPropertyName("statusCode")]
        public string STATUS_CD { get; set; }

        [Required]
        [Column(TypeName = "nvarchar(200)")]
        [JsonPropertyName("deliveryAddress")]
        public string DLIV_ADRR { get; set; }

        [Required]
        [Column(TypeName = "nvarchar(36)")]
        [JsonPropertyName("orderUUID")]
        public string ORD_UUID { get; set; }
        
        [ForeignKey("ORD_ID")]
        public virtual ICollection<OrderProduct> OrderProducts { get; set; }
    }
}
