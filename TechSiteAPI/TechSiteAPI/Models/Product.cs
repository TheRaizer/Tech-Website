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
        public int OrderId { get; set; }//foreign key creating a relationship to the Orders table

        [Required]
        [Column(TypeName = "nvarchar(200)")]
        public string ProductName { get; set; }

        [Required]
        public float Price { get; set; }
    }
}
