import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-tittles',
  templateUrl: './list-tittles.component.html',
  styleUrls: ['./list-tittles.component.scss']
})
export class ListTittlesComponent implements OnInit {

  @Input() title: any;
  @Input() list: any;

  constructor() { }

  ngOnInit(): void {
  }
}
