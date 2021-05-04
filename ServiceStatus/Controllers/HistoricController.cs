using Microsoft.AspNetCore.Mvc;
using ServiceStatus.Controllers;
using ServiceStatus.Models;
using System.Collections.Generic;

namespace ReactCrudDemo.Controllers
{
    public class HistoricController : Controller
    {
        ServiceDataAccess historic = new ServiceDataAccess();

        [HttpGet]
        [Route("Historic/Index")]
        public IEnumerable<Historico> Index()
        {
            return historic.GetHistor();
        }
    }
}