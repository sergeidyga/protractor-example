import {$, by, element, ElementFinder} from 'protractor';
import {driver} from '../../../utils';

export class LoginPo {
  public heading: ElementFinder;
  public emailField: ElementFinder;
  public passwordField: ElementFinder;
  public loginButton: ElementFinder;
  public signUpLink: ElementFinder;
  public forgotYourPasswordLink: ElementFinder;
  public linkedInLink: ElementFinder;
  public googleLink: ElementFinder;
  public privacyLink: ElementFinder;
  public termsLink: ElementFinder;

  constructor() {
    this.heading = $('#app h1');
    this.emailField = element(by.name('email'));
    this.passwordField = element(by.name('password'));
    this.loginButton = element(by.buttonText('Login'));
    this.signUpLink = element(by.linkText('Sign up'));
    this.forgotYourPasswordLink = element(by.partialLinkText('Forgot'));
    this.linkedInLink = element(by.cssContainingText('span', 'LinkedIn'));
    this.googleLink = element(by.cssContainingText('span', 'Google'));
    this.privacyLink = element(by.linkText('Privacy notice'));
    this.termsLink = element(by.partialLinkText('Terms'));
  }

  getWelcomeText() {
    return driver.getText(this.emailField);
  }
}
