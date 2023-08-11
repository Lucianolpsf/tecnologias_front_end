programa {
  funcao inicio() {
    inteiro  i
    cadeia  tab[9]

    para (i = 0; i <= 8; i++){
      tab[i] = " "+ i +" "
    }

    para (i = 0; i <= 8; i++){
      escreva(tab[i])
      se  (tab[i] == 2 ou tab[i] == 5) {
        escreva("\n-----------\n")
      }
      se (tab[i] == 0 ou tab[i] == 1 ou tab[i] == 3 ou tab[i] == 4 ou tab[i] == 6 ou tab[i] == 7 ){
      escreva("|")
      }
    }
  }
}
