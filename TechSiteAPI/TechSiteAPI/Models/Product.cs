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
        public int ProductId { get; set; }

        [Required]
        public int Stock { get; set; }

        [Required]
        public float CurrentPrice { get; set; }

        [Required]
        public int ProductNumber { get; set; }

        [Required]
        [Column(TypeName = "nvarchar(200)")]
        public string ProductName { get; set; }
        
        [Column(TypeName = "nvarchar(MAX)")]
        public string ProductDescription { get; set; }

        [Column(TypeName = "nvarchar(16)")]
        public string ProductCategory { get; set; }//GPU, CPU, RAM, etc.

        [Column(TypeName = "nvarchar(16)")]
        public string ProductValueType { get; set; }//EXPENSIVE, BUDGET, BEST.

    }
}
