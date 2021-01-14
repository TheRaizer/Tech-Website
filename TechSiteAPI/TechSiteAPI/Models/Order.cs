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
        public int OrderId { get; set; }

        [Required]
        public int UserId { get; set; }//foreign key creating a relationship to the Users table

        [Required]
        public DateTime OrderDate { get; set; }

        [Required]
        [Column(TypeName = "nvarchar(200)")]
        public string Status { get; set; }

        [Required]
        [Column(TypeName = "nvarchar(200)")]
        public string DeliveryAddress { get; set; }

        [Required]
        public int OrderNumber { get; set; }
        
        public virtual ICollection<OrderProduct> OrderProducts { get; set; }
    }
}
