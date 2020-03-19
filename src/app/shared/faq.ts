import { FaqModel } from './faq.model';

let numero = 0;

function acrescenta() {
  numero = numero + 1;
  return numero;
}

export const duvidas: FaqModel[] = [
  {
    Numero: acrescenta(),
    Pergunta: 'É necessário ter conhecimento técnico para utilizar o meu software?',
    Resposta: `Não. Os sistemas devem ser pensados para o uso fácil. De todo modo, o usuário
    deve ser devidamente treinado para o utilizar corretamente.`
  }, {
    Numero: acrescenta(),
    Pergunta: 'Quanto tempo o sistema demora pra ficar pronto?',
    Resposta: `O tempo de desenvolvimento de um sistema depende da sua complexidade 
    e também dos recursos dispostos. Geralmente, com o escopo definido é possível 
    definir um prazo.`
  }, {
    Numero: acrescenta(),
    Pergunta: 'Qual é a diferença entre os sistemas Web, Desktop e Mobile?',
    Resposta: `Um Sistema ou Aplicação web é aquela acessada pelo navegador 
    (Chrome, Safari, Opera, Mozila). Aplicação desktop é aquela acessada 
    diretamente pelo sistema operacional. Uma aplicação Mobile (aplicativo)
    é aquela acessada pelo sistema operacional do celular, geralmente Android, IOS ou
    Windows Phone.`
  }, {
    Numero: acrescenta(),
    Pergunta: 'Tenho uma ideia de aplicativo para smartphone. Como posso obtê-lo',
    Resposta: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when
    an unknown printer took a galley of type and scrambled it to make a type specimen book`
  }, {
    Numero: acrescenta(),
    Pergunta: 'É possível meu programa seja instalado em mais de um computador',
    Resposta: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when
    an unknown printer took a galley of type and scrambled it to make a type specimen book`
  }, {
    Numero: acrescenta(),
    Pergunta: 'Todos da minha equipe terão acesso ao sistema?',
    Resposta: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when
    an unknown printer took a galley of type and scrambled it to make a type specimen book`
  },
]
