import { SHORT } from '../../lib/timeouts'

describe('Login tests', () => {
    it('should not login with invalid credentials', () => {
        browser.url('http://zero.webappsecurity.com/')
        $('#signin_button').waitForExist()
        $('#signin_button').click()

        $('#login_form').waitForExist()
        $('#login_form').click()

        $('#user_login').waitForExist()
        $('#user_login').setValue('invalid')

        $('#user_password').waitForExist()
        $('#user_password').setValue('invalid')

        $('input[type="submit"]').waitForExist()
        $('input[type="submit"]').click()

        const error = $('.alert-error')
        expect(error).toHaveText('Login and/or password are wrong.')
    })

    it('should login with valid credentials', () => {
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

        $('.icon-user').waitForExist()
    })

    it('should logout from the system', () => {
        $('.icon-user').waitForExist()
        $('.icon-user').click()

        $('#logout_link').waitForExist()
        $('#logout_link').click()
        
        browser.pause(SHORT)
        $('#signin_button').waitForExist()
    })
})