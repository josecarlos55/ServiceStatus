using System;
using System.Collections.Generic;

#nullable disable

namespace ServiceStatus.Models
{
    public partial class Servico
    {
        public Servico()
        {
            Subscricaos = new HashSet<Subscricao>();
        }

        public string Id { get; set; }
        public string Nome { get; set; }
        public string Estado { get; set; }

        public virtual ICollection<Subscricao> Subscricaos { get; set; }
    }
}
