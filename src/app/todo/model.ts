export class TodoModel{
  name:string;
  todoItemModels:TodoItemModel[];
  constructor(){
    this.name="Muammer",
    this.todoItemModels=[
      {id:1,description:"Kahvaltı",action:false},
      {id:2,description:"Spor",action:true},
      {id:3,description:"Kahve",action:false},
      {id:4,description:"Öğle Yemeği",action:true},
      {id:5,description:"Kahve",action:false},
    ]
  }
}

export class TodoItemModel{
  id?:number;
  description?:string;
  action?:boolean;
}
