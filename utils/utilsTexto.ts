import promptSync from "prompt-sync";

const prompt = promptSync();

export const promptContinuar = () => prompt("Pressione ENTER para continuar..."); 

export const sairPrograma = () => console.log("Saindo do programa..."); 

export const opcaoInvalida = () => console.log("Opção inválida. Por favor, escolha uma opção válida.");