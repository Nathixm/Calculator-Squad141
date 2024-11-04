
const { clicaNumero } = require('../support/mathUtils.js')
massa = require('../fixtures/MassaCalculator')

describe('Testando Calculadora Google', () => {
    before(async () => {
        const calculadora = '//android.view.ViewGroup[@resource-id="com.google.android.calculator:id/main_calculator"]'
        await $(calculadora).waitForDisplayed();
    });

    after(async () => {
        await driver.deleteSession()
    });

    it('Soma', async () => {

        const el1 = await driver.$("accessibility id:4");
        await el1.click();

        const el2 = await driver.$("accessibility id:5");
        await el2.click();

        const el3 = await driver.$("accessibility id:plus");
        await el3.click();

        const el4 = await driver.$("accessibility id:3");
        await el4.click();

        const el5 = await driver.$("accessibility id:1");
        await el5.click();

        const el6 = await driver.$("accessibility id:equals");
        await el6.click();

        const el7 = await driver.$("id:com.google.android.calculator:id/result_final");
        expect(await el7.getText()).toEqual('76');

        const clearButton = await driver.$("accessibility id:clear");
        await clearButton.click();

    });

    it('Raiz', async () => {
        const el1 = await driver.$("accessibility id:square root");
        await el1.click();

        const el2 = await driver.$("accessibility id:9");
        await el2.click();

        const el3 = await driver.$("accessibility id:1");
        await el3.click();

        const el4 = await driver.$("accessibility id:equals");
        await el4.click();

        const el5 = await driver.$("id:com.google.android.calculator:id/result_final");
        expect(await el5.getText()).toEqual('9.5393920141694');

        const clearButton = await driver.$("accessibility id:clear");
        await clearButton.click();

    });

    massa.soma.forEach(({ numero1, numero2, numero3, numero4, resultadoEsperado }) => {

        it('Soma', async () => {
            await clicaNumero(numero1)
            await clicaNumero(numero2)

            soma = 'accessibility id:plus';
            await $(soma).click()

            await clicaNumero(numero3)
            await clicaNumero(numero4)

            const equals = 'accessibility id:equals';
            await $(equals).click();

            const resultadoFinal = await $("id:com.google.android.calculator:id/result_final");
            expect(await resultadoFinal.getText()).toEqual(resultadoEsperado);

            const clearButton = await driver.$("accessibility id:clear");
            await clearButton.click();

        });
    });

    massa.raiz.forEach(({ numero1, numero2, resultadoEsperado }) => {

        it('Raiz', async () => {

            raiz = 'accessibility id:square root';
            await $(raiz).click()

            await clicaNumero(numero1)
            await clicaNumero(numero2)

            const resultadoFinal = await $("id:com.google.android.calculator:id/result_final");
            expect(await resultadoFinal.getText()).toEqual(resultadoEsperado);

            const clearButton = await driver.$("accessibility id:clear");
            await clearButton.click();

        });
    });
});


