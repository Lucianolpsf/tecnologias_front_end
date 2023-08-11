programa {
  funcao inicio() {
    inteiro voto = 0 , votoBarbie = 0, votoOppenheimer = 0

    para (inteiro i = 1; i <= 10; i++){
      escreva("Escolha seu filme: \n")
      escreva("01 - Barbie \n")
      escreva("02 - Oppenheimer \n")
      leia(voto)
      limpa()
      
      escolha(voto)
      {
      caso 01: 
          votoBarbie += 1
        pare
      caso 02: 
          votoOppenheimer += 1
        pare
      caso contrario
        escreva("voto invalido ")
      }
    }
    escreva("Votos Barbie: ", votoBarbie,"\n")
    escreva(" Votos Oppenheimer: ",votoOppenheimer)

  }
}
