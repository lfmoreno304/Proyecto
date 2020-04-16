using Entity;

namespace Ecolplag.Models
{
    public class ClienteModels
    {
         public string Identificacion { get; set; }
        public string Nombre { get; set; }
        public string Email { get; set; }
        public string Telefono { get; set; }
        public string Contrasena { get; set; }
        
    }

    public class ClienteViewModel:ClienteModels{
        public ClienteViewModel()
        {
            
        }

        public ClienteViewModel(Cliente cliente)
        {
            Identificacion=cliente.Identificacion;
            Nombre=cliente.Nombre;
            Email=cliente.Email;
            Telefono=cliente.Telefono;
            Contrasena=cliente.Contrasena;
            Estado=cliente.Estado;
        }
        public string Estado { get; set; }
    }
}