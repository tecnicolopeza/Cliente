/^#?([a-f0-9]{6}|[a-f0-9]{3})$/ //valor hexadecimal
/
^
[a - z0 - 9 - ] + $ / //slug

    /^[a-z0-9_-]{3,16}$/ //coincidencia nombre usuario

/
^
[a - z0 - 9 _ - ] { 6, 18 }
$ / //coincidencia password o contraseña

    /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/ //coincidencia correo

/
^
(https ? : \/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/ //coincidencia URL

    /
    ^
    ( ? : ( ? : 25[0 - 5] | 2[0 - 4][0 - 9] | [01] ? [0 - 9][0 - 9] ? )\.) { 3 }( ? : 25[0 - 5] | 2[0 - 4][0 - 9] | [01] ? [0 - 9][0 - 9] ? ) $ / //coincidencia IP

    /^<([a-z]+)([^<]+)*(?:>(.*)<\/\1>|\s+\/>)$/ //coincidencia etiqueta html