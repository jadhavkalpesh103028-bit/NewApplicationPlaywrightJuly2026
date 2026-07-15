import{Page,Locator, expect} from '@playwright/test';
export class Homepage{
//locators
private readonly page:Page ;
private readonly searchBox:Locator;
private readonly searchButton:Locator ;
private readonly linkMyAccount : Locator ;
private readonly linkRegister: Locator ;
private readonly linkLogin : Locator ;



//constructor
constructor (page:Page){
    this.page=page;
    this.searchBox=page.getByPlaceholder("Search");
    this.searchButton=page.locator(".btn.btn-default.btn-lg");
    this.linkMyAccount=page.locator("a[title='My Account']");
    this.linkLogin=page.locator("(//a[contains(text(),'Log')])[1]");
    this.linkRegister=page.locator("(//a[text()='Register'])[1]");


}
//Actionclass
async isPageExisted(){
    const title:string=await this.page.title();
    if(title){
        return true;
    }else{
        return false;
    }
}
async enterProductname(pName:string){
    try{
    await this.searchBox.fill(pName);
    }catch(error){
        console.log("Exception occured while entering product name",`${error}`);
        throw error;
    }
    }

    async clickonProduct(){
        try{
      await  this.searchButton.click()
    }
    catch(error){
        console.log("exception occcured on searchbutton",`${error}`);
        throw error;
    }
}

    async clickonMyAccount(){
        try{
            await this.linkMyAccount.click();
        }
        catch (error){
            console.log("error while clicking on my Account",`${error}`);
            throw error;
        }

    }
async clickonRegister(){
    try{
    await this.linkRegister.click();

}
catch(error){
    console.log("Exception occured while clicking on Registerbutton",`${error}`);
    throw error;
}

}
async clickonLogin(){
    try{
await this.linkLogin.click();

    }
    catch(error){
        console.log("Exception occured while clicking on LoginBUtton",`${error}`);
        throw error;
    }
}



}