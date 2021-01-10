using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace TechSiteAPI.Models
{
    public class User
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption
        .Identity)]
        [Required]
        public int UserId { get; set; }

        [Column(TypeName = "nvarchar(320)")]
        public string UserEmail { get; set; }

        [Column(TypeName = "nvarchar(15)")]
        public string Username { get; set; }

        [Column(TypeName = "nvarchar(12)")]
        public string Password { get; set; }

        public virtual ICollection<Order> Orders { get; set; }
    }
}
