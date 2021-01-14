using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace TechSiteAPI.Models
{
    public class CD_LookUp
    {
        [Required]
        public int CD_VAL { get; set; }
        [Required]
        [Column(TypeName = "nvarchar(200)")]
        public string TYPE { get; set; }
        [Required]
        [Column(TypeName = "nvarchar(MAX)")]
        public string DESC { get; set; }
    }
}
