function extraerPosicionesEmails (emails){
    var patron = /\w+@([a-zA-Z_]+\.)+[a-zA-Z]{2,6}/;
    var array = patron.exec(emails);
    return array;
}

// console.log(extraerPosicionesEmails("jc@mail.com jc1@mail.com j2c@mail.com j3c@mail.com j4c@mail.com jc5@mail.com"));