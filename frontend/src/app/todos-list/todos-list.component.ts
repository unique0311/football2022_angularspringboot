import { Component, OnInit } from '@angular/core';


export class Todo{
  constructor(
      public id : number,
      public description : string,
      public done : boolean, 
      public deadLine : Date,
  ){

  }
}


@Component({
  selector: 'app-todos-list',
  templateUrl: './todos-list.component.html',
  styleUrls: ['./todos-list.component.css']
})
export class TodosListComponent implements OnInit {
  todos = [
    new Todo(1,'Learn to dance',false,new Date()),
    new Todo(2,'Learn to Code',false,new Date())
  ];

  todo = {
    id:1,
    description:'Learn to code',
  }
  constructor() { }

  ngOnInit(): void {
  }

}
