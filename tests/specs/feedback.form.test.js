describe('Feedback form tests', () => {
    it('should load feedback form', () => {
        browser.url('http://zero.webappsecurity.com/')

        $('#feedback').waitForExist()
        $('#feedback').click()

        $('form').waitForExist()
    })

    it('should submit feedback form', () => {
        $('#name').waitForExist()
        $('#name').setValue('Test Name')

        $('#email').waitForExist()
        $('#email').setValue('test@test.com')

        $('#subject').waitForExist()
        $('#subject').setValue('Test Submit')

        $('#comment').waitForExist()
        $('#comment').setValue('Test Message')

        $('input[type="submit"]').waitForExist()
        $('input[type="submit"]').click()

        expect(browser).toHaveUrl('http://zero.webappsecurity.com/sendFeedback.html')

        expect($('#feedback-title')).toHaveText('Feedback')
    })
})