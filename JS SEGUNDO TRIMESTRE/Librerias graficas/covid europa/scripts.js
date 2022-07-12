addEventListener('load', inicializar, false);

var conexion;

function inicializar() {
    conexion = new XMLHttpRequest();
    conexion.onreadystatechange = procesaPaises;
    conexion.open('GET', 'paisesCovid.php', true);
    conexion.send();
}

var paises = [
    ['Country', 'covid']
    // ['NO', 2000],
    // ['PL', 6000],
    // ['RU', 4000],
    // ['ES', 10000],
    // ['IT', 10000],
    // ['GB', 10000],
    // ['PT', 6000],
    // ['DK', 4000],
    // ['UA', 6000],
    // ['SE', 10000],
    // ['CZ', 6000],
    // ['RO', 6000],
    // ['TR', 6000],
    // ['AL', 6000],
    // ['CH', 10000],
    // ['IE', 6000],
    // ['IS', 500],
    // ['EE', 6000],
    // ['MD', 6000],
    // ['DE', 4000],
    // ['PL', 10000],
    // ['HR', 6000],
    // ['FR', 10000],
    // ['BE', 6000],
    // ['NL', 6000],
    // ['LU', 2000],
    // ['LI', 6000],
    // ['AT', 2000],
    // ['BY', 6000],
    // ['UA', 6000],
    // ['AT', 10000],
    // ['LT', 6000],
    // ['LV', 10000],
    // ['TR', 6000],
    // ['BG', 6000],
    // ['SK', 6000],
    // ['HU', 10000],
    // ['SI', 6000],
    // ['BA', 10000],
    // ['ME', 6000],
    // ['RS', 6000],
    // ['MK', 6000],
    // ['AL', 6000],
    // ['GR', 2000],
    // ['FI', 6000],
    // ['AD', 10000]
];

function procesaPaises() {

    // var cargando = document.getElementById('cargando');
    if (conexion.readyState == 4) {
        var datos = JSON.parse(conexion.responseText);

        //hay que hacer el parseInt 
        for (let i = 0; i < datos.length; i++) {
            paises.push([datos[i]['nombre_pais'], parseInt(datos[i]['casos_covid'])]);
        }
    }
    google.charts.load("current", {
        packages: ["geochart"],
    });
    google.charts.setOnLoadCallback(drawRegionsMap);

}

function drawRegionsMap() {

    var data = google.visualization.arrayToDataTable(paises);
    var options = {
        region: "150",
        colorAxis: {
            colors: [
                "#FFE55C",
                "#FCC440",
                "#F39F25",
                "#E1700F",
                "#C04303",
                "#970800",
            ],
        },
    };

    var chart = new google.visualization.GeoChart(
        document.getElementById("regions_div")
    );

    chart.draw(data, options);
}