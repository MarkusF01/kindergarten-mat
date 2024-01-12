import { Component } from '@angular/core';
import {StoreService} from "../shared/store.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  public showAddData = true;
  public showToast = false;

  constructor(public storeService: StoreService) {
  }

  toggleShowToast(){
    this.showToast = true;
    setTimeout(() => {
      this.showToast = false;
    }, 3000);
  }

  toggleButtonClicked(showAddData: boolean) {
    this.showAddData = showAddData;
  }

}
