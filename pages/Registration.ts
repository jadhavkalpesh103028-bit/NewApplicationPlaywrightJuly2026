import {Locator,expect,Page} from '@playwright/test';
export class Registration{
private readonly page:Page;
private readonly fname:Locator;
private readonly lastName:Locator;
private readonly email:Locator;
private readonly telephone:Locator;
private readonly password:Locator;
private readonly cpassword:Locator;
private readonly newLetter:Locator;
private readonly checkbttn:Locator;
private readonly continuebttn:Locator;
private readonly confirmMessage:Locator;

constructor(page:Page){

    this.page=page;
    this.fname=page.locator("#input-firstname");
    this.lastName=page.locator("#input-lastname");
    this.email=page.locator("#input-email");
    this.telephone=page.locator("input[name='telephone']");
    this.password=page.locator("#input-password");
    this.cpassword=page.locator("#input-confirm");
    this.newLetter=page.locator("input[name='newsletter']");
    this.checkbttn=page.locator("input[name='agree']");
    this.continuebttn=page.locator("input[value='Continue']");
    this.confirmMessage=page.locator("h1:has-text('Your Account Has Been Created!')");
}
async selectfname(firstname:string):Promise<void>{
    try{
        await this.fname.fill(firstname);
    }
    catch(error){
        console.log("Exception while entering firstname!!",`${error}`);
        throw error;
    }
}
async selectlname(lastname:string):Promise<void>{
    try{
        await this.lastName.fill(lastname);
    }
    catch(error){
        console.log("Exception while entering lastname!!",`${error}`);
        throw error;
    }
}
async selectEmail(Email:string):Promise<void>{
    try{
       await this.email.fill(Email);
    }
    catch(error){
        console.log("Exception while writing Email!!",`${error}`);
        throw error;
    }
}
async selectPhone(phone:string){
 try{
       await this.telephone.fill(phone);
    }
    catch(error){
        console.log("Exception while writing Email!!",`${error}`);
        throw error;
    }   
}
async selectPassword(Pass:string):Promise<void>{
    try{
        await this.password.fill(Pass);
    }
    catch(error){
        console.log("Exception while entering Password!!",`${error}`);
        throw error;
    }
}
async selectCPassword(CPass:string):Promise<void>{
    try{
        await this.cpassword.fill(CPass);
    }
    catch(error){
        console.log("Exception while entering ConfirmPassword!!",`${error}`);
        throw error;
    }
}
async selectNews():Promise<void>{
    try{
        await this.newLetter.check();
    }
    catch(error){
        console.log("Exception while checking on Mewsletter!!",`${error}`);
        throw error;
    }
}
async selectCheckbttn():Promise<void>{
    try{
        await this.checkbttn.check();
    }
    catch(error){
        console.log("Exception while checking on CHECKButton!!",`${error}`);
        throw error;
    }
}
async selectContinuebttn():Promise<void>{
    try{
        await this.continuebttn.click();
    }
    catch(error){
        console.log("Exception while checking on ContinueButtin!!",`${error}`);
        throw error;

    }
   
}
async getConfirmMessage(): Promise<string>{
    try{
      return await this.confirmMessage.textContent() ?? "";
    }
    catch(error){
        console.log("Exception while checking on Confirm message!!",`${error}`);
        throw error;

    }
   
}

}
