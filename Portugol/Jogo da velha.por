programa {
	cadeia  tab[9]
	inteiro i , posicao = 0 , jogadas = 0, jogador = 1
	logico vitoria
    
	funcao popular_tabuleiro(){
    		para (i = 0; i <= 8; i++){
      		tab[i] = ""+ i +""
    		}
	}

	funcao desenhar_tabuleiro(){
		para (i = 0; i <= 8; i++){
		      escreva(tab[i])
	
		      se (i == 2 ou i == 5){
		          escreva("\n----------\n")
		      }
		      se (i == 0 ou i == 1 ou i == 3 ou i == 4 ou i == 6 ou i == 7 ){
		      	escreva(" | ")
		      }
	    }
	}
	
	funcao jogar_e_trocar(){
	   se (jogador == 1){
            tab[posicao] = "X"
            jogador++
        }
         senao {
            tab[posicao] = "O"
            jogador = 1
        }
	}
	
	funcao logico verificar_vitoria(){
	        logico vencedor = falso
      
      	    se ((tab[0] == tab[1] e tab[1] == tab[2]) ou (tab[3] == tab[4] e tab[4] == tab[5]) ou (tab[6] == tab[7] e tab[7] == tab[8])){
      	        vencedor = verdadeiro
      	    }
			senao se ((tab[0] == tab[3] e tab[3] == tab[6]) ou (tab[1] == tab[4] e tab[4] == tab[7]) ou (tab[2] == tab[5] e tab[5] == tab[8])){
      	        vencedor = verdadeiro
      	    }
      	     senao se ((tab[0] == tab[4] e tab[4] == tab[8]) ou (tab[2] == tab[4] e tab[4] == tab[6])){
      	        vencedor = verdadeiro
      	    }
      	     senao {
      	        vencedor = falso
      	    }
        retorne vencedor
	}
	
  funcao inicio(){
    popular_tabuleiro()
    desenhar_tabuleiro()

    faca{
        faca{
            escreva("\n\nJogador ", jogador," escolha a posição que deseja\n")
            leia(posicao)
            limpa()
            desenhar_tabuleiro()
        }enquanto (posicao < 0 ou posicao > 8 ou tab[posicao] == "X" ou tab[posicao] == "O")
        
        jogar_e_trocar()
        
        vitoria = verificar_vitoria()
      
        limpa()
        
        desenhar_tabuleiro()
        jogadas += 1
        
    }enquanto (jogadas <= 8 e vitoria == falso)
    
    se (jogadas == 9 e vitoria == falso){
       escreva("\n\n-------------------------------\n")
       escreva("\nEMPATE !!!!!!\n")
    }
    senao {
        escreva("\n\n-------------------------------\n")
        escreva("\nPARABENS VOCÊ VENCEU !!!!!!\n")
    }
  }
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 1295; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */