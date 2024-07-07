import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  names = ['Nicolas', 'Noelia', 'Fernanda', 'Daniel', 'Sergio', 'Andy'];
  roulette = ['Tarado', 'Bridi', 'Caquita', 'Capito', 'Kuno'];
  fates: any[] = [];
  tossNumber = 1000;

  constructor(){
    this.fates = this.names.map(name => {
      // Daniel
      // 1000 veces
      // let result: Possiblity = {
      //   labelFate: name,
      //   probability: 0,
      // };
      // result.labelFate = name;
      // for (let index = 0; index < 1000; index++) {

      //   this.generateIndex
      // }
      return {
        name: name,
        storedValues: {},
        result: '',
      }
    })
  }


  // Daniel puede ser un [tio coco: 20%, caca 50%,      ]

  tossDice(name: string){
    console.log(this.numberOfPlays(name))
    if(this.numberOfPlays(name) > 9){
      alert('taimado ya no puedes jugar')
      return;
    }
    const index = this.gener1ateIndex;
    const person = this.fates.find(element => element.name == name);
    const result = this.roulette[index];
    const values = person.storedValues;
    // values = {tarado: 1, capito: 2, kuno: 3}
    values[result] = values[result] ? values[result] + 1 : 1;
    const resultFormat = Object.keys(values).map(key => `${key}: ${values[key]}`).join(', ')
    person.result = resultFormat;
  }

  numberOfPlays(name: string): number{
    let result = 0;
    const numbers: number[] = Object.values(this.fates.find(element=>element.name == name)?.storedValues);
    console.log(numbers);
    numbers.forEach( element => result += element)
    return result
  }

  get gener1ateIndex(){
    // return Math.round(Math.random() * this.roulette.length*10);
    return Math.floor(Math.random()*this.roulette.length)
  }

  restartGame(){
    this.fates.forEach(element => {
      element.storedValues = {};
      element.result = '';
    });
  }

  tossDiceOneHundred(name: string){
    for(let i = 0; i < 100; i++){
      const index = this.gener1ateIndex;
      const person = this.fates.find(element => element.name == name);
      const result = this.roulette[index];
      const values = person.storedValues;
      // values = {tarado: 1, capito: 2, kuno: 3}
      values[result] = values[result] ? values[result] + 1 : 1;
      const resultFormat = Object.keys(values).map(key => `${key}: ${values[key]}`).join(', ')
      person.result = resultFormat;
    }
  }
}

interface Possiblity{
  labelFate: string,
  probability: number,
}
