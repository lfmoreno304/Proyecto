using System;
using System.Collections.Generic;
using Datos;
using Entity;

namespace Logica
{
    public class ClienteService
    {
        private readonly ConnectionManager connection;
        private readonly ClienteRepository clienteRepository;

        public ClienteService (string connectionString) {
            connection = new ConnectionManager (connectionString);
            clienteRepository = new ClienteRepository (connection);
        }
         public GuardarPersonaResponse Guardar (Cliente cliente) {
            try {
                
                cliente.Estado="Activo";
                connection.Open ();
                clienteRepository.Guardar (cliente);
                connection.Close ();
                return new GuardarPersonaResponse (cliente);
            } catch (Exception e) {
                return new GuardarPersonaResponse ($"Error de la Aplicacion: {e.Message}");
            } finally { connection.Close (); }
        }

    }
    public class GuardarPersonaResponse {
        public GuardarPersonaResponse (Cliente cliente) {
            Error = false;
            Cliente = cliente;
        }
        public GuardarPersonaResponse (string mensaje) {
            Error = true;
            Mensaje = mensaje;
        }
        public bool Error { get; set; }
        public string Mensaje { get; set; }
        public Cliente Cliente { get; set; }

    }
}
