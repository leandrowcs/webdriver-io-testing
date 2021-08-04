import { SHORT, NORMAL, LONG } from '../../lib/timeouts'
import { MOBILE, TABLET, DESKTOP } from '../../lib/devices'

const { assert } = require("console")

describe('First Steps with WebdriverIO', () => {
    // Open a website
    // assert the url and title
    it('should launch the browser with website', () => {
        browser.url('http://www.example.com')
        browser.pause(SHORT)
        expect(browser).toHaveUrl('http://www.example.com/')
        expect(browser).toHaveTitle('Example Domain')
    })

    // Get selector and save it to variable
    // Do assertion
    it('H1 should be visible', () => {
        const h1 = $('h1')
        h1.waitForExist()
        expect(h1).toBeDisplayed()
    })
    it('P should be visible', () => {
        const p = $('p')
        p.waitForExist()
        expect(p).toBeDisplayed()
    })
    it('check link value', () => {
        const link = $('a')
        link.waitForExist()
        expect(link).toHaveLink('https://www.iana.org/domains/example')
    })
    it('Get element text', () => {
        const text = $('h1').getText()
        const element = $('h1')
        element.waitForExist()
        
        expect(element).toHaveText('Example Domain')
        expect(element).toHaveText(text)
    })

    it('Assert attribute value', () => {
        browser.url('https://devexpress.github.io/testcafe/example/')
        const button = $('#submit-button')
        button.waitForExist()
        expect(button).toHaveAttrContaining('type', 'submit')
    })

    it('Assert Value', () => {
        const button = $('#populate')
        button.waitForExist()
        expect(button).toHaveValue('Populate')
    })

    it('Save Screenshot', () => {
        browser.saveScreenshot('screenshots/test.png')
    })

    it('Change Browser Viewport', () => {
        browser.setWindowSize(800, 600)
        browser.pause(NORMAL)
        browser.setWindowSize(1200, 200)
        browser.pause(LONG)
    })

    it('Set Mobile Viewport', () => {
        browser.setWindowSize(MOBILE[0], MOBILE[1])
        browser.pause(SHORT)
    })

    it('Set Tablet Viewport', () => {
        browser.setWindowSize(TABLET[0], TABLET[1])
        browser.pause(SHORT)
    })

    it('Set Desktop Viewport', () => {
        browser.setWindowSize(DESKTOP[0], DESKTOP[1])
        browser.pause(SHORT)
    })
})