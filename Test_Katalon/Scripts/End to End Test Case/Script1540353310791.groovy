import static com.kms.katalon.core.checkpoint.CheckpointFactory.findCheckpoint
import static com.kms.katalon.core.testcase.TestCaseFactory.findTestCase
import static com.kms.katalon.core.testdata.TestDataFactory.findTestData
import static com.kms.katalon.core.testobject.ObjectRepository.findTestObject
import com.kms.katalon.core.checkpoint.Checkpoint as Checkpoint
import com.kms.katalon.core.checkpoint.CheckpointFactory as CheckpointFactory
import com.kms.katalon.core.mobile.keyword.MobileBuiltInKeywords as MobileBuiltInKeywords
import com.kms.katalon.core.model.FailureHandling as FailureHandling
import com.kms.katalon.core.testcase.TestCase as TestCase
import com.kms.katalon.core.testcase.TestCaseFactory as TestCaseFactory
import com.kms.katalon.core.testdata.TestData as TestData
import com.kms.katalon.core.testdata.TestDataFactory as TestDataFactory
import com.kms.katalon.core.testobject.ObjectRepository as ObjectRepository
import com.kms.katalon.core.testobject.TestObject as TestObject
import com.kms.katalon.core.webservice.keyword.WSBuiltInKeywords as WSBuiltInKeywords
import com.kms.katalon.core.webui.driver.DriverFactory as DriverFactory
import com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords as WebUiBuiltInKeywords
import internal.GlobalVariable as GlobalVariable
import com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords as WebUI
import com.kms.katalon.core.mobile.keyword.MobileBuiltInKeywords as Mobile
import com.kms.katalon.core.webservice.keyword.WSBuiltInKeywords as WS
import com.thoughtworks.selenium.Selenium as Selenium
import org.openqa.selenium.firefox.FirefoxDriver as FirefoxDriver
import org.openqa.selenium.WebDriver as WebDriver
import com.thoughtworks.selenium.webdriven.WebDriverBackedSelenium as WebDriverBackedSelenium
import static org.junit.Assert.*
import java.util.regex.Pattern as Pattern
import static org.apache.commons.lang3.StringUtils.join
import com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords as CucumberKW

WebUI.openBrowser('')

WebUI.navigateToUrl('http://nba-arenas.herokuapp.com/#/login')

WebUI.click(findTestObject('Object Repository/NBATest/Page_NbaArenas/NavRegister'))

WebUI.setText(findTestObject('Object Repository/NBATest/Page_NbaArenas/input_Login_usernameInput'), 'testuser')

WebUI.setText(findTestObject('Object Repository/NBATest/Page_NbaArenas/input_Login_emailInput'), 'test@test.com')

WebUI.setEncryptedText(findTestObject('Object Repository/NBATest/Page_NbaArenas/input_Login_passwordInput'), '5NlMFRvHAa7ATndoAAy6Gg==')

WebUI.click(findTestObject('Object Repository/NBATest/Page_NbaArenas/RegisterSubmit'))

WebUI.delay(1)

WebUI.setText(findTestObject('Object Repository/NBATest/Page_NbaArenas/input_Login_usernameInput'), 'testuser')

WebUI.setEncryptedText(findTestObject('Object Repository/NBATest/Page_NbaArenas/input_Login_passwordInput'), '5NlMFRvHAa7ATndoAAy6Gg==')

WebUI.click(findTestObject('Object Repository/NBATest/Page_NbaArenas/LoginSubmit'))

WebUI.delay(1)

WebUI.click(findTestObject('Object Repository/NBATest/Page_NbaArenas/NavArenas'))

WebUI.delay(1)

WebUI.click(findTestObject('Object Repository/NBATest/Page_NbaArenas/AddArenaButton'))

WebUI.delay(1)

WebUI.setText(findTestObject('Object Repository/NBATest/Page_NbaArenas/input_Back to Arenas_nameInput'), 'Test Arena')

WebUI.setText(findTestObject('Object Repository/NBATest/Page_NbaArenas/input_Name_dateInput'), '01/01/1999')

WebUI.setText(findTestObject('Object Repository/NBATest/Page_NbaArenas/input_Opened_costInput'), '15000000')

WebUI.setText(findTestObject('Object Repository/NBATest/Page_NbaArenas/input_Cost_locationInput'), 'Test Location')

WebUI.setText(findTestObject('Object Repository/NBATest/Page_NbaArenas/input_location_addressInput'), 'Test Address')

WebUI.setText(findTestObject('Object Repository/NBATest/Page_NbaArenas/input_Address_capacityInput'), '15000')

WebUI.click(findTestObject('Object Repository/NBATest/Page_NbaArenas/CreateArenaButton'))

WebUI.delay(1)

WebUI.click(findTestObject('Object Repository/NBATest/Page_NbaArenas/EditArenaButton'))

WebUI.delay(1)

WebUI.setText(findTestObject('Object Repository/NBATest/Page_NbaArenas/input_Back to Details_nameInpu'), 'Test Arena Updated')

WebUI.setText(findTestObject('Object Repository/NBATest/Page_NbaArenas/input_Opened_costInput'), '15500000')

WebUI.setText(findTestObject('Object Repository/NBATest/Page_NbaArenas/input_Cost_locationInput'), 'Test Location Updated')

WebUI.setText(findTestObject('Object Repository/NBATest/Page_NbaArenas/input_Address_capacityInput'), '23000')

WebUI.click(findTestObject('Object Repository/NBATest/Page_NbaArenas/EditArenaSubmit'))

WebUI.delay(1)

WebUI.click(findTestObject('Object Repository/NBATest/Page_NbaArenas/NavTeams'))

WebUI.delay(1)

WebUI.click(findTestObject('Object Repository/NBATest/Page_NbaArenas/AddTeamButton'))

WebUI.delay(1)

WebUI.setText(findTestObject('Object Repository/NBATest/Page_NbaArenas/input_Logout_nameInput'), 'Test Team')

WebUI.setText(findTestObject('Object Repository/NBATest/Page_NbaArenas/input_Name_foundedInput'), '08/08/1975')

WebUI.setText(findTestObject('Object Repository/NBATest/Page_NbaArenas/input_Founded_coachInput'), 'Test Coach')

WebUI.setText(findTestObject('Object Repository/NBATest/Page_NbaArenas/input_Coach_ownershipInput'), 'Test Owner')

WebUI.setText(findTestObject('Object Repository/NBATest/Page_NbaArenas/input_Ownership_affiliationsIn'), 'Test Affiliation')

WebUI.click(findTestObject('NBATest/Page_NbaArenas/ArenaSelection'))

WebUI.delay(1)

WebUI.click(findTestObject('NBATest/Page_NbaArenas/ArenaOption'))

WebUI.delay(1)

WebUI.click(findTestObject('Object Repository/NBATest/Page_NbaArenas/CreateTeamButton'))

WebUI.delay(1)

WebUI.click(findTestObject('Object Repository/NBATest/Page_NbaArenas/EditTeamButton'))

WebUI.setText(findTestObject('Object Repository/NBATest/Page_NbaArenas/input_Return to Details_nameIn'), 'Test Team Updated')

WebUI.setText(findTestObject('Object Repository/NBATest/Page_NbaArenas/input_Team Name_dateInput'), '04/06/1975')

WebUI.setText(findTestObject('Object Repository/NBATest/Page_NbaArenas/input_Founded_coachInput'), 'Test Coach Updated')

WebUI.click(findTestObject('Object Repository/NBATest/Page_NbaArenas/EditTeamSubmit'))

WebUI.delay(1)

WebUI.click(findTestObject('Object Repository/NBATest/Page_NbaArenas/NavLogout'))

WebUI.delay(1)

WebUI.closeBrowser()

WebUI.click(findTestObject('NBATest/Page_NbaArenas/ArenaSelection'))

WebUI.click(findTestObject('NBATest/Page_NbaArenas/ArenaOption'))

