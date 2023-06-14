export function filtrarPorAutor(objeto: Array<any>, autors: Array<string>) {
	const resultado = objeto.filter((item: any) => autors.includes(item.author));
	return resultado;
}
