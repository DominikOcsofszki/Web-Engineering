fetch("./data.xml").then(function (result) {
  console.log(result);
  result.text().then(function (result) {
    const xml = new DOMParser().parseFromString(result, "text/xml");
    console.log(xml);

    const series = [];
    xml.querySelectorAll("baustein").forEach(function (baustein) {
      const data = [];
      baustein.querySelectorAll("wert_detail").forEach(function (wert) {
        data.push(
          parseFloat(
            wert
              .querySelector("wert")
              .textContent.replace(".", "")
              .replace(",", ".")
          )
        );
      });
      series.push({
        name: baustein.querySelector("baustein_name").textContent,
        data: data,
      });
    });

    Highcharts.chart("diagram", {
      title: {
        text: "Stromerzeugung in Deutschland",
        align: "left",
      },

      yAxis: {
        title: {
          text: "kWh",
        },
      },

      xAxis: {},

      legend: {
        layout: "vertical",
        align: "right",
        verticalAlign: "middle",
      },

      plotOptions: {
        series: {
          label: {
            connectorAllowed: false,
          },
          pointStart: 2010,
        },
      },
      series: series,

      responsive: {
        rules: [
          {
            condition: {
              maxWidth: 500,
            },
            chartOptions: {
              legend: {
                layout: "horizontal",
                align: "center",
                verticalAlign: "bottom",
              },
            },
          },
        ],
      },
    });

    document.getElementById("stand").innerHTML =
      xml.querySelector("stand").textContent;
    document.getElementById("von").innerHTML =
      xml.querySelector("von").textContent;
    document.getElementById("bis").innerHTML =
      xml.querySelector("bis").textContent;
    xml.querySelectorAll("baustein").forEach(function (baustein) {
      const div = document.createElement("div");
      div.innerHTML = `
        <h2>${baustein.querySelector("baustein_name").textContent}</h2>
        <table>
          <tr>
            <th>Datum</th>
            <th>Uhrzeit</th>
            <th>Wert</th>
          </tr>
        </table>
      `;
      document.querySelector("main").appendChild(div);
      baustein.querySelectorAll("wert_detail").forEach(function (datensatz) {
        const table = [...document.querySelectorAll("table")].pop();
        const tr = document.createElement("tr");
        tr.innerHTML = `
            <td>${datensatz.querySelector("Datum").textContent}</td>
            <td>${datensatz.querySelector("Uhrzeit").textContent}</td>
            <td>${datensatz.querySelector("wert").textContent}</td>
        `;
        table.appendChild(tr);
      });
    });
  });
});
