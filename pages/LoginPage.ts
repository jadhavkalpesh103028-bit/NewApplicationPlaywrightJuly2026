import{Page,Locator,expect}from '@playwright/test';
export class Loginpage{
    private readonly page:Page;
    private readonly lemail:Locator;
    private readonly lpassword:Locator;
    private readonly lbutton:Locator;
    private readonly errormsg:Locator;
    private readonly sucessmsg:Locator;

constructor(page:Page){
    this.page=page;
    this.lemail=page.locator("#input-email");
     this.lpassword=page.locator("#input-password");
      this.lbutton=page.locator("input[type='submit']");
     this.errormsg=page.locator("div[class='alert alert-danger alert-dismissible']");
     this.sucessmsg=page.locator("div h2:nth-of-type(1)");      
}

async getLEmail(email:string):Promise<void>{
    try{
      await  this.lemail.fill(email);
    }
    catch(error){
        console.log("Exception occured while entering email",`{$error}`);
        throw error;
    }

}
async getLPassword(password:string):Promise<void>{
    try{
     await this.lpassword.fill(password);
    }
    catch(error){
        console.log("Exception occured while entering password",`{$error}`);
        throw error;
    }

}
async clickLoginBttn():Promise<void>{
    try{
        await this.lbutton.click();
    }
    catch(error){
        console.log("Exception occured while clicking on Login Button",`{$error}`);
        throw error;
    }

}
async getSucessMessage():Promise<string>{
    try{
        return await this.sucessmsg.textContent()?? "";
    }
    catch(error){
        console.log("Exception occured while getting sucess message",`{$error}`);
        throw error;
    }

}
async getErrormessage():Promise<string>{
    try{
       return await this.errormsg.textContent()?? "";
    }
    catch(error){
        console.log("Exception occured while getting error Message",`{$error}`);
        throw error;
    }

}


}