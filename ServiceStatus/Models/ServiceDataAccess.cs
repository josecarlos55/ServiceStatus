﻿using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using ServiceStatus.Models;
namespace ServiceStatus.Controllers
{
    
    public class ServiceDataAccess
    {
        isdownContext db = new isdownContext();

        public IEnumerable<Servico> GetServico()
        {
            
            return db.Servicos.ToList();
        }
        public IEnumerable<Historico> GetHistor()
        {
            return db.Historicos.ToList();
        }
    }
}
    

