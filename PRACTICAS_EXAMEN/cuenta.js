let cuentaBan = [{
        titular: "Juan",
        saldo: 20000,
        ingresarSaldo: function (ingresado) {
            return this.saldo + ingresado;
        },
        extraerSaldo: function (ingresado) {
            if ((saldo - ingresado) < 0) {
                return "Saldo insuficiente";
            } else {
                return this.saldo - ingresado;
            }
        }

    },
    {
        titular: "Amanda",
        saldo: 934562,
        ingresarSaldo: function (ingresado) {
            return this.saldo + ingresado;
        },
        extraerSaldo: function (ingresado) {
            if ((saldo - ingresado) < 0) {
                return "Saldo insuficiente";
            } else {
                return this.saldo - ingresado;
            }
        }


    },
    {
        titular: "Alvaro",
        saldo: 12465,
        ingresarSaldo: function (ingresado) {
            return this.saldo + ingresado;
        },
        extraerSaldo: function (ingresado) {
            if ((saldo - ingresado) < 0) {
                return "Saldo insuficiente";
            } else {
                return this.saldo - ingresado;
            }
        }


    },
    {
        titular: "Mariposa",
        saldo: 7884,
        ingresarSaldo: function (ingresado) {
            return this.saldo + ingresado;
        },
        extraerSaldo: function (ingresado) {
            if ((saldo - ingresado) < 0) {
                return "Saldo insuficiente";
            } else {
                return this.saldo - ingresado;
            }
        }


    },
];

console.table(cuentaBan);
console.log("\nCuentas ordenadas por sueldo\n");
console.table(cuentaBan.sort((a, b) => a.saldo - b.saldo));