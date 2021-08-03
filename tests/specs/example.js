const { assert } = require("console")

describe('First Steps with WebdriverIO', () => {
    // Open a website
    // assert the url and title
    it('should launch the browser with website', () => {
        browser.url('http://www.example.com')
        browser.pause(3000)
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
        const element = $('h1')
        element.waitForExist()
        
        expect(element).toHaveText('Example Domain')

        const expectText = 'Example Domain FAIL'
        const text = $('h1').getText()
        console.log(text)
        
    })
})