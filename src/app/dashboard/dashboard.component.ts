import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  public showAddData = true;
  public showToast = false;

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
