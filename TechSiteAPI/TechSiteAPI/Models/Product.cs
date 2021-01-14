using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace TechSiteAPI.Models
{
    public class Product
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption
           .Identity)]
        [Required]
        public int PROD_ID { get; set; }

        [Required]
        public int STOCK { get; set; }

        [Required]
        public float CURNT_PRC { get; set; }

        [Required]
        public int PROD_NUM { get; set; }

        [Required]
        [Column(TypeName = "nvarchar(200)")]
        public string PROD_NAME { get; set; }
        
        [Column(TypeName = "nvarchar(MAX)")]
        public string PROD_DESC { get; set; }

        [Column(TypeName = "nvarchar(16)")]
        public string PROD_CTGRY_CD { get; set; }

        [Column(TypeName = "nvarchar(16)")]
        public string PROD_VAL_TYPE_CD { get; set; }

    }
}
