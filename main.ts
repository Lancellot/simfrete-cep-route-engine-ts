
import exibirMenu from "./components/menu";
import desafio1 from "./desafios/desafio-1/desafio-1";
import desafio2 from "./desafios/desafio-2/desafio-2";
import {promptContinuar, sairPrograma, opcaoInvalida} from "./utils/utilsTexto";
import promptSync from "prompt-sync";


const prompt = promptSync();

const acoes: Record<string, () => void> = {
    '1': () => desafio1(),
    '2': () => desafio2()
}

let continuar = true;

do {

    exibirMenu();

    const opcao = prompt("Digite a opção desejada: ");

    if(opcao === "0") {
    sairPrograma();
    continuar = false;
    continue;
    }

    if(acoes[opcao]) {
        acoes[opcao]();
    }    else {
        opcaoInvalida();
    }
    promptContinuar();

}while (continuar);