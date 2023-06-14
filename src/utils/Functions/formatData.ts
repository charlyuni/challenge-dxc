export const formatDate = (numero: number) => {
	const horas = Math.floor(numero / 3600);
	const minutos = Math.floor((numero % 3600) / 60);
	const segundosRestantes = numero % 60;

	let horasFormateadas = horas.toString();
	const minutosFormateados = minutos.toString().padStart(2, '0');
	const segundosFormateados = segundosRestantes.toString().padStart(2, '0');

	if (horasFormateadas !== '0') {
		horasFormateadas = horasFormateadas.padStart(2, '0');
		return `${horasFormateadas}:${minutosFormateados}:${segundosFormateados}`;
	} else {
		return `${minutosFormateados}:${segundosFormateados}`;
	}
};
