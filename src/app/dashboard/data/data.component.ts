import { Component } from '@angular/core';
import { BackendService } from 'src/app/shared/backend.service';
import { CHILDREN_PER_PAGE } from 'src/app/shared/constants';
import { StoreService } from 'src/app/shared/store.service';
import {PageEvent} from "@angular/material/paginator";
import {Sort} from "@angular/material/sort";
import {ChildResponse} from "../../shared/interfaces/Child";

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.scss']
})
export class DataComponent {

  constructor(public storeService: StoreService, private backendService: BackendService) {}
  displayedColumns: string[] = ['name', 'kindergardenId', 'address', 'birthDate', "age", "registerDate", "remove"];
  protected readonly CHILDREN_PER_PAGE = CHILDREN_PER_PAGE;

  getAge(birthDate: string) {
    var today = new Date();
    var birthDateTimestamp = new Date(birthDate);
    var age = today.getFullYear() - birthDateTimestamp.getFullYear();
    var m = today.getMonth() - birthDateTimestamp.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDateTimestamp.getDate())) {
        age--;
    }
    return age;
  }

  public cancelRegistration(child: ChildResponse) {
    this.backendService.deleteChildData(child);
  }

  handlePageEvent(e: PageEvent) {
    this.storeService.currentPage = e.pageIndex;
    this.storeService.childrenPerPage = e.pageSize;
    this.backendService.getChildrenCurrentPage();
  }

  sortChange(sortState: Sort){
    this.storeService.currentSort = sortState;
    console.log(sortState)
    this.backendService.getChildrenCurrentPage()
  }
}


