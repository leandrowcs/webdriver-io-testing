import { SHORT } from '../../lib/timeouts'

const { assert } = require("console")

describe('Browser Actions', () => {
    it('Inputs', () => {
        browser.url('https://devexpress.github.io/testcafe/example/')
        const input = $('#developer-name')
        input.waitForExist()
        input.setValue('Leandro')
        browser.pause(SHORT)
        input.clearValue()
        browser.pause(SHORT)
        input.addValue('Leandro')
        browser.pause(SHORT)
    })

    it('Click', () => {
        const buttonPopulate = $('#populate')
        buttonPopulate.waitForExist()
        buttonPopulate.click()
        //buttonPopulate.doubleClick()
        browser.pause(SHORT)
    })

    it('Checkbox and Radio Button', () => {
        browser.url('https://devexpress.github.io/testcafe/example/')
        const checkbox = $('#remote-testing')
        checkbox.waitForExist()
        checkbox.click()
        browser.pause(SHORT)

        const radio = $('#linux')
        radio.waitForExist()
        radio.click()
        browser.pause(SHORT)
    })

    it('Select Box', () => {
        browser.url('https://devexpress.github.io/testcafe/example/')
        const select = $('#preferred-interface')
        select.waitForExist()
        select.selectByVisibleText('JavaScript API')
        browser.pause(SHORT)
    })
})