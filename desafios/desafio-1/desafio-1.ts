import fs from "fs";
import path from "path";

export default function desafio1() {

    const arquivo = path.join(
        __dirname,
        "cidades.txt"
    );

    const dados = fs.readFileSync(
        arquivo,
        "utf-8"
    );

    const linhas = dados
        .split("\n")
        .map(linha => linha.trim());


    const separador = linhas.indexOf("--");

    const cidades = linhas
        .slice(0, separador);

    const cepBusca = linhas[separador + 1];

    let cidadeEncontrada = "Nenhuma cidade encontrada";

    for (const linha of cidades) {

        const [cidade, inicio, fim] = linha.split(",");

        const cepInicial = Number(inicio);
        const cepFinal = Number(fim);
        const cep = Number(cepBusca);


        if (cep >= cepInicial && cep <= cepFinal) {
            cidadeEncontrada = cidade;
            break;
        }

    }
    console.log("===================================");
    console.log(`O CEP ${cepBusca} pertence à cidade: ${cidadeEncontrada}`);
    console.log("==================================\n");

}