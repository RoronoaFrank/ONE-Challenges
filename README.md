<h1 align='center'><img src=https://github.com/user-attachments/assets/f8425ac8-79dd-4c54-9a03-c711e4208699 alt= Logo alura challenges y nombre de la app: Encriptador de texto, imagen en tonos azules y destellos claros></h1>

## Descripción de la aplicación - Encriptador de Texto

Esta aplicación fue desarrollada con el objetivo principal de **encriptar y desencriptar texto** para proteger mensajes de manera segura. Utiliza un método simple de encriptación basado en la sustitución de vocales por conjuntos específicos de caracteres, generando así un texto que resulta indescifrable para quien no posea las claves de desencriptación.

### Características Principales:

- **Encriptación de Mensajes**: La app toma el texto ingresado por el usuario y, utilizando una función en JavaScript, reemplaza las vocales del texto por una secuencia de letras predeterminada. Esto convierte el mensaje en una cadena de texto encriptada que solo puede ser desencriptada con las claves adecuadas.
  
- **Desencriptación de Mensajes**: El texto encriptado generado por la app puede ser desencriptado ingresándolo nuevamente en la aplicación. Una función en JavaScript identifica los bloques de caracteres encriptados y los reemplaza por las vocales originales, revelando así el texto original.

- **Validación del Texto**: La app utiliza una función de JavaScript que valida el texto ingresado por el usuario. Si no cumple con la condición de solo letras minúsculas y sin acentos, se genera un mensaje de advertencia. En caso de que el texto cumpla con la condición, la función ejecutará la acción seleccionada por el usuario al presionar los botones de "Encriptar" o "Desencriptar".

- **Mensajes de Error y Reinicio**: La app también incluye mensajes de notificación cuando no se ha ingresado texto y se intenta encriptar o desencriptar. Además, ofrece la posibilidad de reiniciar la aplicación, borrando el texto ingresado y generado, para empezar de nuevo.

- **Copiado Rápido**: Una vez encriptado o desencriptado el texto, el usuario puede copiarlo fácilmente con un botón dedicado.

- **Interfaz Responsiva**: La app está diseñada para ser totalmente **responsiva**, adaptándose de manera eficiente a diferentes dispositivos, como PCs, laptops, tablets y smartphones, asegurando una experiencia óptima para todos los usuarios.

### Uso de la Aplicación:

1. **Encriptación**: Ingresa el texto que deseas proteger en el área destinada a la entrada de texto. Asegúrate de cumplir con la condición de usar solo letras minúsculas y sin acentos. Pulsa el botón de "Encriptar", y en la sección de resultados verás el texto encriptado. Este texto podrá ser copiado o desencriptado posteriormente.
   
2. **Desencriptación**: Si tienes un texto encriptado generado por la app, simplemente ingrésalo en el área de texto y pulsa el botón "Desencriptar". La app procesará el texto y lo revertirá a su forma original.

3. **Reinicio**: Puedes pulsar el botón de reinicio en cualquier momento para limpiar tanto el texto ingresado como el generado. La app notificará al usuario cuando el reinicio haya sido exitoso.

### Recomendaciones de Uso:

Esta app es ideal para **personas que deseen proteger sus mensajes** en situaciones como:
- Uso de redes públicas de Internet.
- Envío de información privada.
- Necesidad de mayor privacidad en la comunicación.

### Ejemplo de Encriptación:

- **Texto Original**: "este es un mensaje secreto"
- **Texto Encriptado**: "enterstenter enters ufatn menternsaijenter sentercrentertober"

### Ejemplo de Desencriptación:

- **Texto Encriptado**: "enterstenter enters ufatn menternsaijenter sentercrentertober"
- **Texto Desencriptado**: "este es un mensaje secreto"

### Programa de Desarrollador

Esta aplicación fue desarrollada como parte de los retos del programa **ONE-Alura Latam 2024**, un programa reconocido por su enfoque en la enseñanza de habilidades tecnológicas. El encriptador de texto es uno de los proyectos demostrativos de la primera fase del programa, cuyo objetivo es adquirir y demostrar habilidades en el desarrollo web, logrando con éxito el paso a la siguiente fase del programa.

