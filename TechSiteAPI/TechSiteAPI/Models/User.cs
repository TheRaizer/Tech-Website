using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text.Json.Serialization;
using System.Threading.Tasks;

namespace TechSiteAPI.Models
{
    public class User
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption
        .Identity)]
        [Required]
        [JsonPropertyName("userId")]
        public int USER_ID { get; set; }

        [Column(TypeName = "nvarchar(320)")]
        [JsonPropertyName("userEmail")]
        public string USER_EMAIL { get; set; }

        [Column(TypeName = "nvarchar(15)")]
        [JsonPropertyName("username")]
        public string USERNAME { get; set; }

        [Column(TypeName = "nvarchar(12)")]
        [JsonPropertyName("password")]
        public string PASSWORD { get; set; }

        public virtual ICollection<Order> Orders { get; set; }
    }
}
