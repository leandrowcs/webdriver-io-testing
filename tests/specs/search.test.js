describe('Feedback form tests', () => {
    it('should load search on homepage', () => {
        browser.url('http://zero.webappsecurity.com/')

        $('#searchTerm').waitForExist()
    })

    it('should submit search', () => {
        $('#searchTerm').setValue('bank')
        browser.keys('Enter')

        const resultTitle = $('h2')
        resultTitle.waitForExist()
        expect(resultTitle).toHaveText('Search Results:')
    })
})