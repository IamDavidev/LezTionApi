# Backlog

## history of users

> - As a user, can register to the system with a username and password
> - As a user, can login to the system with a username and password
> - As a user, can logout from the system

## Entities

### User

- `uuid` : Indentifier Unique

> - UUID V4
> - unique per user

- `name` : Name of the user

> - String
> - Can`t be empty
> - Can`t be start with a space or character
> - Can`t be end with a space or character
> - Can`t be more than 50 characters
> - Can`t be less than 3 characters

- `email` : Email of the user

> - String
> - [format](https://www.rfc-editor.org/rfc/rfc5322)

- `password` : Password of the user

> - String
> - Can`t be empty
> - Can`t be include a space

- `profile picture` : Profile picture of the user

> - String
> - Url of the image

- `status` : Status of the user (no implement yet in the system missing integration sockets)

> - Enum (active, inactive or deleted)
> - Can`t be empty
> - Can`t be other value

- `alias` : Alias of the user

> - String
> - Can be empty
> - Can be start with or character but not a space
> - Can be end with or character but not a space
> - Can be more than 50 characters
> - Can be less than 3 characters

- `created at` : Date of creation of the user

> - Date
> - Format: YYYY-MM-DD
> - Can`t be empty
> - Can`t be in the future
> - Can`t be before 2023

- `updated at` : Date of update of the user

> - Date
> - Format: YYYY-MM-DD
> - Can`t be empty
> - Can`t be before the creation date

## Historias de usuario

> - Como usuario, puedo registrarme en el sistema con un nombre de usuario y una contraseña
> - Como usuario, puedo iniciar sesión en el sistema con un nombre de usuario y una contraseña
> - Como usuario, puedo cerrar sesión del sistema

## Entidades

### Usuario

- `uuid` : Identificador único

> - UUID V4
> - único por usuario

- `name` : Nombre del usuario

> - String
> - No puede estar vacío
> - No puede empezar con un espacio o carácter
> - No puede terminar con un espacio o carácter
> - No puede tener más de 50 caracteres
> - No puede tener menos de 3 caracteres

- `email` : Correo electrónico del usuario

> - String
> - [formato](https://www.rfc-editor.org/rfc/rfc5322)

- `password` : Contraseña del usuario

> - String
> - No puede estar vacío
> - No puede incluir un espacio

- `profile picture` : Imagen de perfil del usuario

> - String
> - Url de la imagen

- `status` : Estado del usuario (no implementado aún en el sistema falta integración con sockets)

> - Enum (activo, inactivo o eliminado)
> - No puede estar vacío
> - No puede ser otro valor

- `alias` : Alias del usuario

> - String
> - Puede estar vacío
> - Puede empezar con o carácter pero no un espacio
> - Puede terminar con o carácter pero no un espacio

- `created at` : Fecha de creación del usuario

> - Date
> - Formato: YYYY-MM-DD
> - No puede estar vacío
> - No puede estar en el futuro
> - No puede estar antes de 2023

- `updated at` : Fecha de actualización del usuario

> - Date
> - Formato: YYYY-MM-DD
> - No puede estar vacío
> - No puede estar antes de la fecha de creación
