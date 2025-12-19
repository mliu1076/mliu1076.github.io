import { Component } from '@angular/core';
import routes from './routes';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
@Component({
    selector: 'intro',
    templateUrl: './intro.component.html',
    styleUrls: ['./intro.component.css']
})
//the name of the class correlates to app.module.ts
export class Intro{
    attempts: number = 0;
    lowercaseAlphabet: string[] = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n'+ 
    'o','p','q','r','s','t','u','v','w','x','y','z'];
    nameArray: string[] = ['m','a','x','l','i','u']
    name: string = "max lee"
    //variables must declare with type, not any
    randomInt = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1)) + min;
    generateRandomLowercase(letter: string){
    let counter: number = 0;
    let randomNum: number = 0;
    if(letter.length == 1){
        randomNum = this.randomInt(0,25);
        while(this.lowercaseAlphabet[randomNum] != letter){
        counter++;
        console.log(this.lowercaseAlphabet[randomNum] + "\n");
        randomNum = this.randomInt(0,25);
        }
    }
    this.attempts += counter;
    return this.lowercaseAlphabet[randomNum];
    }
}

