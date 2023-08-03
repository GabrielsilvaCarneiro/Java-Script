function cone(){
    const pi = 3.14
    let raioCone = Number(prompt("Qual o valor do raio da base do cone?"))
    let alturaCone = Number(prompt("Qual o valor da altura do cone?"))
    let valorCone = ((pi*(raioCone*raioCone))*alturaCone)/3
    alert(`o valor do volume do cone é de ${valorCone} m³`)
    textoCone = document.querySelector('h4#cone')
    textoCone.textContent = `O valor do volume do cone é de ${valorCone} m³`
}
function piramide(){
    let ladoPiramide = Number(prompt("Qual o valor do lado da base da piramide?"))
    let alturaPiramide = Number(prompt("Qual o valor da altura da piramide"))
    let valorPiramide = ((ladoPiramide*ladoPiramide)*alturaPiramide)/3
    alert(`o valor do volume da piramide é de ${valorPiramide} m³`)
    textoCone = document.querySelector('h4#piramide')
    textoCone.textContent = `O valor do volume da piramide é de ${valorPiramide} m³`
}
function prisma(){
    let compParalelepipedo = Number(prompt("Qual o valor do comprimento do prisma?"))
    let largParalelepipedo = Number(prompt("Qual o valor da largura do prisma?"))
    let alturaParalelepipedo = Number(prompt("Qual o valor da altura do prisma"))
    let valorParalelepipedo = ((compParalelepipedo*largParalelepipedo)*alturaParalelepipedo)
    alert(`o valor do volume do prisma é de ${valorParalelepipedo} m³`)
    textoCone = document.querySelector('h4#prisma')
    textoCone.textContent = `O valor do volume do prisma é de ${valorParalelepipedo} m³`
}
function cilindro(){
    const pi = 3.14
    let raioCilindro = Number(prompt("Qual o valor do raio da base do cilindro?"))
    let alturaCilindro = Number(prompt("Qual o valor da altura do cilindro?"))
    let valorCilindro = ((pi*(raioCilindro*raioCilindro))*alturaCilindro)
    alert(`o valor do volume do cilindro é de ${valorCilindro} m³`)
    textoCone = document.querySelector('h4#cilindro')
    textoCone.textContent = `O valor do volume do cilindro é de ${valorCilindro} m³`
}
function esfera(){
    const pi = 3.14
    let raioEsfera = Number(prompt("Qual o valor do raio da esfera?"))
    let valorEsfera = (4*pi*(raioEsfera*raioEsfera*raioEsfera))/3
    alert(`o valor do volume da esfera é de ${valorEsfera} m³`)
    textoCone = document.querySelector('h4#esfera')
    textoCone.textContent = `O valor do volume do esfera é de ${valorEsfera} m³`
}
