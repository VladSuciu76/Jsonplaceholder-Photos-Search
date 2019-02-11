import { ListService } from './../services/list.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  listItems: any = [];

  paginateFrom = 0;
  paginateTo   = 10;
  prevDisable  = true;
  nextDisable  = true;

  constructor(private listService:ListService) { }

  ngOnInit() {
    this.listService.getPhotos().subscribe(data=> {
      this.listItems = data;
       if(this.listItems.length > 10) this.nextDisable = false;
    }, error => {
      console.log(error)
    });
  }

  prevPage(num) {
    if(this.paginateFrom <= 0) {
      this.prevDisable = true;
    } else {
      this.paginateFrom -= 10;
      this.paginateTo -= 10;
      this.nextDisable = false;
    }
  }

  nextPage(num) {
    if(this.paginateTo >= this.listItems.length) {
      this.nextDisable = true;
    } else {
      this.paginateFrom += 10;
      this.paginateTo += 10;
      this.prevDisable = false;
    }
  }

}
