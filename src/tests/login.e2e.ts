import {t} from 'testcafe';
import Routing from '../model/routing';
import Times from '../model/waiting-times';
import LoginPage from '../model/page-models/login.model';


fixture('Login')
	.page(`https://app-demo.novemberfirst.com/${Routing.PUBLIC}`)
	.meta('section', 'public');

test
('Signup link exists', async t => {
	await t.expect(LoginPage.signupLink.exists).ok({ timeout: Times.SHORT });
});

test
('Forgot password link exists', async t => {
	await t.expect(LoginPage.forgotPasswordLink.exists).ok({ timeout: Times.SHORT });
	
})

test
('Submit valid credentials and accounts', async t => {
	//TODO - Login with the created account and assert a correct login.
	await t
	.typeText('customerNumber','208102284')
	.typeText('email','tally.arun01@gmail.com')
	.typeText('password','Tally999')
	.click('submitButton')
	.expect(LoginPage.alertMessage.exists).ok({ timeout: Times.SHORT });	
})

test
('Submit invalid credentials and show an error message', async t => {
	// TODO - Type a wrong password and assert that an error message appear.
	// NOTE: if the password is type 5 times wrong in a row the account is blocked. Might be good idea to use the same account
	// as the login to prevent the account lock.
	await t
	.typeText('customerNumber','208102284')
	.typeText('email','tally.arun01@gmail.com')
	.typeText('password','Tally')
	.click('submitButton')
	.expect(LoginPage.errorMessage.exists).ok({ timeout: Times.SHORT });		
})


