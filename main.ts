
import exibirMenu from "./components/menu.js";
import desafio1 from "./desafios/desafio-1.js";
import desafio2 from "./desafios/desafio-2.js";
import {promptContinuar, sairPrograma, opcaoInvalida} from "./utils/utilsTexto.js";
import promptSync from "prompt-sync";

const prompt = promptSync();

const acoes: Record<string, () => void> = {
    '1': () => desafio1(prompt),
    '2': () => desafio2(prompt)
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