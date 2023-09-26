const KEY_OPENAI = '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'

let mensagem = 'ola'

fetch("https://api.openai.com/v1/completions", {
    method:'POST',
    headers:{
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${KEY_OPENAI}`
    },
    body: JSON.stringify({
        model: "text-davinci-003",
        prompt: mensagem,
        max_tokens: 2048,
        temperature: 0.5
    }),
})
.then(response => response.json())
.then(data => {
    console.log(data)
})
.catch(erro =>{
    console.log(erro)
})