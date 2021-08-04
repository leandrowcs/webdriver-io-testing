import { setUncaughtExceptionCaptureCallback } from "process"

describe('Currency exchange tests', () => {
    it('should log in the application', () => {
        browser.url('http://zero.webappsecurity.com/')
        $('#signin_button').waitForExist()
        $('#signin_button').click()

        $('#login_form').waitForExist()
        $('#login_form').click()

        $('#user_login').waitForExist()
        $('#user_login').setValue('username')

        $('#user_password').waitForExist()
        $('#user_password').setValue('password')

        $('input[type="submit"]').waitForExist()
        $('input[type="submit"]').click()

        $('.nav-tabs').waitForExist()
    })

    it('should make a currency exchange', () => {
        $('#pay_bills_tab').waitForExist()
        $('#pay_bills_tab').click()

        $('*=Currency').click()

        $('#pc_currency').waitForExist()
        $('#pc_currency').selectByAttribute('value', 'CAD')

        $('#pc_amount').setValue('100')
        $('#pc_inDollars_true').click()

        $('#pc_calculate_costs').click()
        const conversion = $('#pc_conversion_amount')
        expect(conversion).toHaveTextContaining('dollar (CAD)')
        expect(conversion).toHaveTextContaining('U.S. dollar (USD)')

        $('#purchase_cash').click()
        const message = $('#alert_content')
        expect(message).toHaveText('Foreign currency cash was successfully purchased.')
    })
})