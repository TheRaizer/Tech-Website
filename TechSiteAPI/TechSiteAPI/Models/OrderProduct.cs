using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace TechSiteAPI.Models
{
    public class OrderProduct
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption
        .Identity)]
        [Required]
        public int OrderProductId { get; set; }

        [Required]
        public int ProductId { get; set; }//foreign key creating a relationship to the Products table

        [Required]
        public int OrderId { get; set; }//foreign key creating a relationship to the Orders table

        [Required]
        public float PaidPrice { get; set; }

        [Required]
        public float PaidProductName { get; set; }

        [ForeignKey("OrderId")]
        public virtual Order Order { get; set; }

        [ForeignKey("ProductId")]
        public virtual Product Product { get; set; }
    }
}
