using Microsoft.AspNetCore.Mvc;
using ServiceStatus.Controllers;
using ServiceStatus.Models;
using System.Collections.Generic;

namespace ReactCrudDemo.Controllers
{
    public class HistoricController : Controller
    {
        ServiceDataAccess servico = new ServiceDataAccess();

        [HttpGet]
        [Route("Historic/Index")]
        public IEnumerable<Historico> Index()
        {
            return Historico.GetHistor();
        }
    }
}