import fs from "fs";
import path from "path";

export default function desafio2() {
    const arquivo = path.join(__dirname, "cidades.txt");
    const conteudo = fs.readFileSync(arquivo, "utf-8");
    const linhas = conteudo.split("\n").map(linha => linha.trim());

    const separador1 = linhas.indexOf("--");
    const separador2 = linhas.indexOf("--", separador1 + 1);

    const listaCidades = linhas.slice(0, separador1);
    const listaRotas = linhas.slice(separador1 + 1, separador2);
    const buscaCep = linhas[separador2 + 1].split(",");

    const cidades: any = {};
    listaCidades.forEach(linha => {
        const [nome, inicio, fim] = linha.split(",");
        cidades[nome] = { inicio: Number(inicio), fim: Number(fim) };
    });

    function acharCidade(cep: number): string | null {
        for (const nome in cidades) {
            if (cep >= cidades[nome].inicio && cep <= cidades[nome].fim) {
                return nome;
            }
        }
        return null;
    }

    const cidadeInicial = acharCidade(Number(buscaCep[0]));
    const cidadeFinal = acharCidade(Number(buscaCep[1]));

    console.log("============================");
    console.log("Sai de:", cidadeInicial);
    console.log("Chego em:", cidadeFinal);

    if (!cidadeInicial || !cidadeFinal) {
        console.log("CEP não encontrado em nenhuma cidade");
        return;
    }

    const rotas: any = {};
    listaRotas.forEach(linha => {
        const [origem, destino, valor] = linha.split(",");
        if (!rotas[origem]) {
            rotas[origem] = [];
        }
        rotas[origem].push({ cidade: destino, custo: Number(valor) });
    });

    let menorValor = Infinity;
    let melhorRota = "";

    function procurar(atual: string, destino: string, custo: number, caminho: string[]) {
        if (atual === destino) {
            if (custo < menorValor) {
                menorValor = custo;
                melhorRota = caminho.join(" -> ");
            }
            return;
        }
        const proximos = rotas[atual] || [];
        for (const rota of proximos) {
            if (!caminho.includes(rota.cidade)) {
                procurar(rota.cidade, destino, custo + rota.custo, [...caminho, rota.cidade]);
            }
        }
    }

    procurar(cidadeInicial, cidadeFinal, 0, [cidadeInicial]);

    console.log("============================");
    console.log("Melhor rota:", melhorRota);
    console.log("Custo:", menorValor.toFixed(2));
    console.log("============================\n");

}