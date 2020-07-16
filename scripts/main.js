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

    // contando o numero de repetições atual
    var lista_repeat= []
    for (i in no_repeat){
        var cont= 0
        var repetir= true
        for (j in lista_carac){
            if (no_repeat[i]==lista_carac[j]){
                if (repetir){
                    cont= cont+1 
                }
                             
            }else{
                if(cont!=0){
                    repetir=false
                }
                
            }
        }

        lista_carac.splice(0, cont)
        lista_repeat.push(cont)
    }

    /* Gerando o resultado */
    
    // ajustando as repetições ao limite
    for(i in lista_repeat){
        if(parseInt(lista_repeat[i])>limite){
            lista_repeat[i]= limite
        }
    }
    
    // gerando lista com valores ajustados
    lista_resultado= []
    for (i in no_repeat){
        var j= 0
        while (j < lista_repeat[i]){
            lista_resultado.push(no_repeat[i])
            j= j+1
        }   
    }

    // resultado
    var resultado= lista_resultado.join('')
    
    document.getElementById('output1').value= resultado
}

// função para questão 2

function replace_char(){
    /* Recebendo os dados */
    var palavra2= String(document.getElementById('string2').value)
    var repeat= parseInt(document.getElementById('int2').value)

   /*  Tratando os dados */
    const char_list= palavra2.split('') 

    // encontrando os index do char desejado
    var positions=[]
    for (i in char_list){
        if(char_list[i] == '?'){
            positions.push(i)
        }
    }

    // encontrando os chars anteriores a eles
    var chars_for_replace= []
    for(i in positions){
        if(positions[i]== 0){
            chars_for_replace.push(char_list.slice(-1)[0])
        }else{
            chars_for_replace.push(char_list[(parseInt(positions[i]))-1])
        }
        
    }
    if((chars_for_replace[0])=='?'){
        chars_for_replace[0]=chars_for_replace.slice(-1)[0]
    }
   

    /* Gerando o resultado */
    
    var replaced_list=[]
    var cont= 0
    for(i in char_list){
        if(char_list[i]=='?'){
            var r= 0
            while(r < repeat){
                replaced_list.push(chars_for_replace[cont])
                r= r+1 
            }
            cont= cont+1           
            
        }else{
            replaced_list.push(char_list[i])
        }
    }

    // resultado
    var resultado= replaced_list.join('')
    
    document.getElementById('output2').value= resultado

}

// funcão para questão 3

function letters_sum(){
    /* Recebendo os dados */
    var string1= String(document.getElementById('string3.1').value)
    var string2= String(document.getElementById('string3.2').value)

   /*  Tratando os dados */
    const s1_list= string1.split('')
    const s2_list= string2.split('')
    
    // ordenando as listas
    var sort_s1= s1_list.sort()
    var sort_s2= s2_list.sort()

    // separando maior e menor
    var menor1= sort_s1[0]
    var menor2= sort_s2[0]
    var maior1= sort_s1.slice(-1)[0]
    var maior2= sort_s2.slice(-1)[0]

    // convertendo para numeros
    const alfabeto=['0', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    var num_menor1= parseInt(alfabeto.indexOf(menor1))
    var num_menor2= parseInt(alfabeto.indexOf(menor2))
    var num_maior1= parseInt(alfabeto.indexOf(maior1))
    var num_maior2= parseInt(alfabeto.indexOf(maior2))

    /* Gerando o resultado */
    
    var resultado= (num_maior1*num_menor2)+(num_maior2*num_menor1)
    
    document.getElementById('output3').value= resultado

}


