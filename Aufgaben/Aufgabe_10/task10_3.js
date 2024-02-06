//for showing saved as .js

async function fetchMarktdaten(): Promise<any[]> {
	const response = await fetch("https://ik.imagekit.io/d6i1cxh9kx/Realisierte_Erzeugung_202312250000_202401042359_Viertelstunde.json");
	const data = await response.json();
	console.log(data)
	return data;
}
function calculateMinimum(data: number[]): number {
	return Math.min(...data);
}

function calculateMaximum(data: number[]): number {
	return Math.max(...data);
}

function calculateAverage(data: number[]): number {
	const sum = data.reduce((acc, val) => acc + val, 0);
	return sum / data.length;
}

function calculateSum(data: number[]): number {
	return data.reduce((acc, val) => acc + val, 0);
}

async function main() {
	Deno.serve(async (_request: Request) => {
		console.log("Server läuft auf http://localhost:8000");

		const data = await fetchMarktdaten();
		const marktdaten = data.map((entry: any) => entry.wind_onshore);

		const minimum: number = calculateMinimum(marktdaten);
		const maximum: number = calculateMaximum(marktdaten);
		const durchschnitt: number = calculateAverage(marktdaten);
		const summe: number = calculateSum(marktdaten);

		const body = `
      <html>
        <body>
          <h1>Marktdaten Analyse</h1>
          <p>Minimum: ${minimum}</p>
          <p>Maximum: ${maximum}</p>
          <p>Durchschnitt: ${durchschnitt}</p>
          <p>Summe: ${summe}</p>
        </body>
      </html>
    `;

		return new Response(body);
	});
}
main();




