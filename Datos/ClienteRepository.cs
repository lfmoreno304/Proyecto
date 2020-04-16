using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using Entity;
namespace Datos
{
    public class ClienteRepository
    {
        private readonly SqlConnection connection;
        private readonly List<Cliente> clientes = new List<Cliente> ();
         public ClienteRepository (ConnectionManager _connection) {
            this.connection = _connection._conexion;
        }

        public void Guardar (Cliente cliente) {
            using (var command = connection.CreateCommand ()) {
                command.CommandText = @"Insert Into Clientes (Identificacion,Nombre,Email, Contraseña,Estado,Telefono) 
                                        values (@Identificacion,@Nombre,@Email,@Contraseña,@Estado,@Telefono)";
                command.Parameters.AddWithValue ("@Identificacion", cliente.Identificacion);
                command.Parameters.AddWithValue ("@Nombre", cliente.Nombre);
                command.Parameters.AddWithValue ("@Email", cliente.Email);
                command.Parameters.AddWithValue ("@Contraseña", cliente.Contrasena);
                command.Parameters.AddWithValue ("@Estado", cliente.Estado);
                command.Parameters.AddWithValue ("@Telefono", cliente.Telefono);
                var filas = command.ExecuteNonQuery ();
            }
        }
    }
}