const btnModal = document.getElementById('open')
const btnConfirma = document.getElementById('confirma')
const btnCancela = document.getElementById('cancela')

btnModal.addEventListener('click',open)

btnCancela.addEventListener('click', close)

btnConfirma.addEventListener('click', ()=>{
    close()
    alert('Confirmado com sucesso')
})

function open(){
    const modal = document.getElementById('sec-modal')
    modal.classList.remove('hide')
}
function close(){
    const modal = document.getElementById('sec-modal')
    modal.classList.add('hide')
}
