import { Component, OnInit } from '@angular/core';
import { TodoModel } from './model';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent  {
  Item:TodoModel=new TodoModel();
  showAll:boolean=true;
  constructor() { }

  addItem( addInput:any){
    console.log(this.showAll);
    this.Item.todoItemModels.push({
      description:addInput.value,action:false,id:this.Item.todoItemModels.length+1
    })
    addInput.value="";
  }

  getItems(){

    if(this.showAll)
      return this.Item.todoItemModels;
    else{
      return this.Item.todoItemModels.filter(i=>i.action!=null&&i.action==false)
    }
  }
}
