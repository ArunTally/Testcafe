import Routing from "../model/routing";
import {t} from 'testcafe';
import Times from '../model/waiting-times';
import SignupPage from '../model/page-models/signup.model';

fixture('Signup')
	.page(`https://app-demo.novemberfirst.com/${Routing.SIGN_UP}`)
	.meta('section', 'public');

test
('Submit valid credentials', async t => {
	const cvr = "36542993"; //this is a danish company registration number. You can find more at https://datacvr.virk.dk/
	// TODO - use a email that you have access. Can also use a mailosaur.com email if you want to assert the email confirmation.
	// Email verification is OPTIONAL. Not required.
	const yourPersonalEmail = "new-coworker@nicedomain.com";
	// TODO - fillform from the SignupPage need to be implemented.
	// NOTE - If you use a CVR that is already registered you will receive a warning. You can continue without any issues.
	await SignupPage.fillForm(cvr, yourPersonalEmail);
	await t.expect(SignupPage.verificationPage.exists).ok({ timeout: Times.LONG });
});

