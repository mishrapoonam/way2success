import { Component } from '@angular/core';
import { Months } from './data/data';

interface suggestion {
  shortCode: string,
  description: string
}
@Component({
  selector: 'app-auto-suggestion',
  templateUrl: './auto-suggestion.component.html',
  styleUrls: ['./auto-suggestion.component.css']
})
export class AutoSuggestionComponent {
  selectedItem : string = '';
  showSuggestion: boolean = false;
  monthData = Months;
  suggestionList:suggestion[] = [];

  onInputChange() {
    if(this.selectedItem.trim()){
      this.suggestionList=  Object.values(this.monthData).filter((x)=> {
         return x.description.toLowerCase().includes(this.selectedItem.toLowerCase());
      });
      this.showSuggestion = true;
    } else {
      this.suggestionList = [];
      this.showSuggestion = false;
    }
    
  }

  selectSuggestion(item:suggestion ){
    this.selectedItem = item.description
    this.suggestionList = [];
    this.showSuggestion = false;
  }
}
