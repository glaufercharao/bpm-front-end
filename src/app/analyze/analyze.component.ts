import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';


@Component({
  selector: 'app-analyze',
  templateUrl: './analyze.component.html',
  styleUrls: ['./analyze.component.css']
})
export class AnalyzeComponent implements OnInit {
  aprovation = [] ;
  selectedAprovation: any;
  inputValue: any;
  @Output() inputEmitter = new  EventEmitter();
  @Output() selectedItem = new EventEmitter();

  constructor() {
    this.aprovation = [{ name:'Aprovar' },
                       { name:'Reprovar' }];
    this.selectedItem.emit(this.selectedAprovation);
  }
  ngOnInit(): void {
  }

  public onChangeItem() {
    this.selectedItem.emit(this.selectedAprovation);
  }
  public inputContent(){
    this.inputEmitter.emit(this.inputValue);
  }

}
