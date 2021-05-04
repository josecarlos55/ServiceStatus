using System;
using System.Collections.Generic;

#nullable disable

namespace ServiceStatus.Models
{
    public partial class Servico
    {
        public Servico()
        {
            Historico = new HashSet<Historico>();
            Subscricaos = new HashSet<Subscricao>();
        }

        public string Id { get; set; }
        public string Nome { get; set; }
        public string Estado { get; set; }

        public virtual ICollection<Historico> Historico { get; set; }
        public virtual ICollection<Subscricao> Subscricaos { get; set; }
    }
}
