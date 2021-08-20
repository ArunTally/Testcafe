import { Selector, t } from 'testcafe';
import Routing from '../routing';

class SignupPage {
	public countryCode: Selector;
	public registrationNumber: Selector;
	public firstName: Selector;
	public lastName: Selector;
	public email: Selector;
	public emailConfirmation: Selector;
	public phoneNumber: Selector;
	public submitButton: Selector;
	public loginLink: Selector;
	public successMessage: Selector;
	public errorMessage: Selector;
	public duplicatedCVRWarning: Selector;
	public consentCheckbox: Selector;
	public alertMessage: Selector;
	public verificationPage: Selector;
	public existingAccount: Selector;
	

	constructor() {
		this.countryCode = Selector('mat-select[formcontrolname="countryCode"]');
		this.registrationNumber = Selector('input[formcontrolname="registrationNumber"]');
		this.firstName = Selector('input[formcontrolname="firstName"]');
		this.lastName = Selector('input[formcontrolname="lastName"]');
		this.email = Selector('input[formcontrolname="email"]');
		this.emailConfirmation = Selector('input[formcontrolname="emailConfirmation"]');
		this.phoneNumber = Selector('input[formcontrolname="phoneNumber"]');
		this.submitButton = Selector('button[type="submit"]');
		this.consentCheckbox = Selector('input[type="checkbox"]');
		
		
		// TODO - Define proper selectors for the missing class variables.
	}

	async navigateToPage() {
		await t.navigateTo(`https://app-demo.novemberfirst.com/${Routing.SIGN_UP}`);
	}

	async fillForm(cvr: string, email: string) {
		// TODO - implement missing method.
		// This method is a guidance. You can define any other method in this page-model that resembles the page actions
		await t
		.selectCountry()
		.fillPersonalInfo(cvr,email)
		.submitForm();
		
	}

	async submitForm() {
		// TODO - implement missing method.
		// This method is a guidance. You can define any other method in this page-model that resembles the page actions
		await t	
		.click('consentCheckbox')
		.click('submitButton');
		
	}

	async selectCountry() {
		await t
			.click(this.countryCode)
			.wait(1000)
			.click(this.countryOption('DK'));
	}

	async fillPersonalInfo(cvr: string, email: string) {
		// TODO - implement missing method.
		// This method is a guidance. You can define any other method in this page-model that resembles the page actions
		await t	
		.typeText('registrationNumber',cvr)
		.typeText('firstName','Arun')
		.typeText('lastName','km')
		.typeText('email',email)
		.typeText('emailConfirmation',email)
		.typeText('phoneNumber','9220009900');
		
	
	}

	private countryOption(value: string): Selector {
		return Selector('mat-option[country-code="' + value + '"]');
	}
}

export default new SignupPage();
