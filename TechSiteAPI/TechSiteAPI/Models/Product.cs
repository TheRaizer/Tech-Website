using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text.Json.Serialization;
using System.Threading.Tasks;

namespace TechSiteAPI.Models
{
    public class Product
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption
           .Identity)]
        [Required]
        [JsonPropertyName("productId")]
        public int PROD_ID { get; set; }

        [Required]
        [JsonPropertyName("stock")]
        public int STOCK { get; set; }

        [Required]
        [JsonPropertyName("currentPrice")]
        public float CURNT_PRC { get; set; }

        [Required]
        [JsonPropertyName("productNumber")]
        public int PROD_NUM { get; set; }

        [Required]
        [Column(TypeName = "nvarchar(200)")]
        [JsonPropertyName("productName")]
        public string PROD_NAME { get; set; }

        [Required]
        [Column(TypeName = "nvarchar(MAX)")]
        [JsonPropertyName("productDescription")]
        public string PROD_DESC { get; set; }

        [Required]
        [Column(TypeName = "nvarchar(3)")]
        [JsonPropertyName("productCategoryCode")]
        public string PROD_CTGRY_CD { get; set; }

        [Required]
        [Column(TypeName = "nvarchar(3)")]
        [JsonPropertyName("productValueTypeCode")]
        public string PROD_VAL_TYPE_CD { get; set; }

    }
}
