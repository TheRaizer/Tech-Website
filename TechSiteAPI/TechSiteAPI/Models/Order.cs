using System;
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
        public int UserId { get; set; }

        [Required]
        [Column(TypeName = "nvarchar(200)")]
        public string ProductName { get; set; }

        [Required]
        public DateTime OrderDate { get; set; }
        [Required]
        public int Progress { get; set; } // This integer represents the progress of the order. 0-processing, 1-shipping, 2-arrived
    }
}
