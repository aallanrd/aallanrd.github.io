// spec.js
describe('Protractor NBA Arenas', function() {
	//-------- Support Functions ----------
	//Generates random string
	getRandomString = function(length) {
		var string = '';
		var letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
		for (i = 0; i < length; i++) {
			string += letters.charAt(Math.floor(Math.random() * letters.length));
		}
		return string;
    }
	
	//Gets a random number between min and max
	getRandomNum = function(min, max){
		return parseInt(Math.random() * (max - min) + min);
	};
	
	//-------- Login ----------
	var usernameInput = element(by.id('usernameInput'));
	var passwordInput = element(by.id('passwordInput'));
	var loginButton = element(by.id('loginSubmitBtn'));
	var title = element(by.id('NBATitle'));

	function login(user, pass) {
		usernameInput.sendKeys(user);
		passwordInput.sendKeys(pass);
		loginButton.click();
	}
  
	//-------- Arenas ----------
	var AddArenaButton = element(by.id('ArenasNav'));
	function navigateToArenas(){
		AddArenaButton.click();	 
	}

	beforeEach(function() {
		browser.get('http://nba-arenas.herokuapp.com/#/login');
	});

	it('should login', function() {
		login("admin","pass1234");
			
		var EC = protractor.ExpectedConditions;
		browser.wait(EC.presenceOf(title), 3000);

		expect(title.getText()).toEqual("Welcome to NBA Arenas");
	});
	  
	it('should navigate to Arenas Page', function() {
		login("admin","pass1234");
		
		var EC = protractor.ExpectedConditions;
		browser.wait(EC.presenceOf(title), 3000);

		expect(title.getText()).toEqual("Welcome to NBA Arenas");
	});
});