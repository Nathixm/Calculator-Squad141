async function clicaNumero(numero) {
    const seletor = `accessibility id:${numero}`;
    await $(seletor).click()
}

module.exports = { clicaNumero }