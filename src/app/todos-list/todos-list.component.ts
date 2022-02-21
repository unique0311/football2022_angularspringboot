import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todos-list',
  templateUrl: './todos-list.component.html',
  styleUrls: ['./todos-list.component.css']
})
export class TodosListComponent implements OnInit {
  todos = [
    {
      id:1,
      description:'Learn to code',
    },
    {
      id:2,
      description:'Learn to dance',
    },
    {
      id:3,
      description:'Learn to sing',
    },
    
  ];

  todo = {
    id:1,
    description:'Learn to code',
  }
  constructor() { }

  ngOnInit(): void {
  }

}
