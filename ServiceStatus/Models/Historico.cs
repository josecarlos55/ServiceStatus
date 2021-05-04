using System;
using System.Collections.Generic;

#nullable disable

namespace ServiceStatus.Models
{
    public partial class Historico
    {

        public string IdServico { get; set; }
        public string DataFalha { get; set; }
        public string IdFalha { get; set; }

        public virtual Falha IdFalhaNavigation { get; set; }
        public virtual Servico IdServicoNavigation { get; set; }
    }
}
