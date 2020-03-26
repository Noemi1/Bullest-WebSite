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
    Resposta: `A usabilidade é um atributo de qualidade relacionado à facilidade do uso do sistema. 
    Os sistemas devem ser pensados para não ser complicado de usar. De todo modo, o usuário
    deve ser devidamente treinado para usufruir do sistema corretamente e sem dificuldades.`
  }, {
    Numero: acrescenta(),
    Pergunta: 'Quanto tempo o sistema demora pra ficar pronto?',
    Resposta: `O tempo de desenvolvimento de um sistema depende da sua complexidade 
    e também dos recursos dispostos. Geralmente, com o escopo definido é possível 
    definir um prazo. Apesar disso, existem mudanças que podem ocorrer ao longo do 
    projeto que podem reduzir ou aumentar o tempo de produção.`
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
    Pergunta: 'Tenho uma ideia de aplicativo para smartphone. Como posso obtê-lo?',
    Resposta: `Você pode entrar em contato conosco e marcar uma reunião para conversar sobre
    esse aplicativo. Não se procupe em não ter noções técnicas, pois nossa equipe está preparada
    para atendê-lo de todo modo. Nessa reunião definiremos o escopo da sua ideia e a sua 
    viabilidade.`
  }, {
    Numero: acrescenta(),
    Pergunta: 'É possível meu programa seja instalado em mais de um computador',
    Resposta: `Com toda certeza. Basta que você tenha os instaladores necessarios 
    da aplicação. Todos os recursos necessários serão melhores informados ou 
    será fornecido pela empresa.`
  }, {
    Numero: acrescenta(),
    Pergunta: 'Todos da minha equipe terão acesso ao sistema?',
    Resposta: `Tudo isso depende de como você quer seu sistema. O acesso pode ser limitado ou não
    de acordo com a sua necessidade e desejo. Existem diversos tipos de acesso que os usuários
    do sistema podem ter, ou então o que pode ocorrer é de bloquear completamente as funcionalidade 
    para alguns funcionários.`
  },
]
