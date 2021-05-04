using System;
using System.Collections.Generic;

#nullable disable

namespace ServiceStatus.Models
{
    public partial class Falha
    {
        public Falha()
        {
            Historicos = new HashSet<Historico>();
        }

        public string Id { get; set; }
        public string Descricao { get; set; }
        public string Tempo { get; set; }

        public virtual ICollection<Historico> Historicos { get; set; }
    }
}
