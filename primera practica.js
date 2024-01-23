  class VerificarCorreoElectronico {

    public static void main(String[] args) {
        // Crear un objeto Scanner para leer la entrada del usuario
        Scanner scanner = new Scanner(System.in);

        // Solicitar al usuario que ingrese una cadena
        System.out.print("Ingrese una cadena de texto: ");
        String cadenaIngresada = scanner.nextLine();

        // Verificar si es un correo electr�nico
        if (esCorreoElectronico(cadenaIngresada)) {
            System.out.println("La cadena ingresada es un correo electr�nico v�lido.");
        } else {
            System.out.println("La cadena ingresada NO es un correo electr�nico v�lido.");
        }

        // Cerrar el scanner
        scanner.close();
    }

    public static boolean esCorreoElectronico(String cadena) {
        // Verificar si la cadena contiene el car�cter '@'
        if (!cadena.contains("@")) {
            return false;
        }

        // Verificar las terminaciones permitidas
        String[] terminacionesPermitidas = { ".com", ".com.mx", ".mx" };
        for (String terminacion : terminacionesPermitidas) {
            if (cadena.endsWith(terminacion)) {
                return true;
            }
        }

        // Si no coincide con ninguna terminaci�n permitida
        return false;
    }
}
