# Teste prático
## *Estágio de Desenvolvimento Aurum*

<br/><br/>
### Objetivo
Este projeto tem como objetivo ser uma resposta ao teste prático que foi solicitado para a empresa Aurum para o Estágio de Desenvolvimento.
O enunciado do teste pode ser visto no arquivo "teste_estagio_dev.docx"

### Tecnologias
Foi solicitado que o teste fosse feito em Javascript, por isso tomei a liberdade e compus uma página para integrar as questões com as respostas, até por esse motivo preferi não utilizar modelo de implementação sugerido. As tecnologias usadas foram:
- Javascript
- HTML
- CSS
- Live Server(extensão do vscode para rodar um pequeno servidor. )
<br/>

```javascript
// função para questão 1

function remove_repeated(){
    /* Recebendo os dados */
    var palavra= String(document.getElementById('string1').value)
    var limite= parseInt(document.getElementById('int1').value)

   /*  Tratando os dados */
    const lista_carac= palavra.split('') 

    // extraindo dados sem repetição consecutiva para comparação
    var no_repeat= [] 
    for (carac of lista_carac){
        if(no_repeat.includes(carac)){
            if((no_repeat.slice(-1)[0])==carac){
                console.log('Já incluso')
            }else{
                no_repeat.push(carac)
            }
        }else{
            no_repeat.push(carac)
        }
    }
```

[![Tela da Resposta do teste de estágio Aurum.](https://i.imgur.com/B2HVdnE.png "Tela da Resposta do teste de estágio Aurum.")](https://www.aurum.com.br/ "Tela da Resposta do teste de estágio Aurum.")

### Guia
#### teste_estagio_dev.docx
Arquivo do Word com o enunciado do teste.
#### index.html
Página HTML da solução, nela estão contidas as questões e as respostas do teste.
#### Pasta img
Pasta contendo imagens utilizadas no projeto.
#### Pasta scripts 
Pasta contendo o arquivo Javascript com a lógica para as respostas.
#### Pasta styles
Pasta contendo o arquivo CSS utilizado para estilizar a página.

---
 [![Linkedin Badge](https://img.shields.io/badge/-LinkedIn-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/guilherme-ramires-4480a0160)](https://www.linkedin.com/in/guilherme-ramires-4480a0160/)   [![Gmail Badge](https://img.shields.io/badge/-Gmail-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:guilhermejramires@gmail.com)](mailto:guilhermejramires@gmail.com)

Desenvolvido por Guilherme Jesuino Ramires 
