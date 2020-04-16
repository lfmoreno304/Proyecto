using System;
using System.Collections.Generic;
using System.Linq;
using Ecolplag.Models;
using Entity;
using Logica;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
namespace Ecolplag.Controllers {
    [Route ("api/[controller]")]
    [ApiController]
    public class ClienteController: ControllerBase{
        private readonly ClienteService clienteService;
        public IConfiguration Configuration { get; }
        public ClienteController (IConfiguration configuration) {
            Configuration = configuration;
            string connectionString = Configuration["ConnectionStrings:DefaultConnection"];
            clienteService = new ClienteService (connectionString);
        }
        
        [HttpPost]
        public ActionResult<ClienteViewModel> Post(ClienteModels clienteModels){
            Cliente cliente= MapearCliente(clienteModels);
            var response=clienteService.Guardar(cliente);
            if(response.Error){
              return BadRequest(response.Mensaje);
            }
            return Ok(response.Cliente);
        }
        public Cliente MapearCliente (ClienteModels clienteModels) {
            var cliente = new Cliente {
                Identificacion = clienteModels.Identificacion,
                Nombre = clienteModels.Nombre,
                Email = clienteModels.Email,
                Telefono = clienteModels.Telefono,
                Contrasena = clienteModels.Contrasena
            };
            return cliente;
        }
    }
}