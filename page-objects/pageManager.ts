import {Page, expect} from '@playwright/test';
import {NavigationPage} from '../page-objects/navigationPage'
import {signInPage} from '../page-objects/signInPage'
import {signUpPage} from '../page-objects/signUpPage'
import {artPage} from '../page-objects/artPage'
import {accessoriesPage} from '../page-objects/accessoriesPage'
import {clothesPage} from '../page-objects/clothesPage'





export class PageManager {

private readonly page: Page
private readonly navigationPage: NavigationPage 
private readonly signInPage: signInPage
private readonly signUpPage: signUpPage
private readonly artPage: artPage
private readonly accessoriesPage: accessoriesPage
private readonly clothesPage: clothesPage



constructor (page: Page) {
this.page = page
this.navigationPage = new NavigationPage(this.page)
this.signInPage = new signInPage(this.page)
this.signUpPage = new signUpPage(this.page)
this.artPage = new artPage(this.page)
this.accessoriesPage = new accessoriesPage(this.page) 
this.clothesPage = new clothesPage(this.page) 


}

navigateTo () {
    return this.navigationPage
}

onSignInPage (){
    return this.signInPage
}


onSignUpPage () {
    return this.signUpPage
}

onArtPage (){
    return this.artPage
}

onAccessoriesPage (){
    return this.accessoriesPage
}

onClothesPage (){
    return this.clothesPage
}
}