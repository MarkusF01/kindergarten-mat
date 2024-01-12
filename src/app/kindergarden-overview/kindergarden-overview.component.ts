import {Component} from '@angular/core';
import {StoreService} from "../shared/store.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-kindergarden-overview',
  templateUrl: './kindergarden-overview.component.html',
  styleUrls: ['./kindergarden-overview.component.scss']
})
export class KindergardenOverviewComponent {

  constructor(public storeService: StoreService, public router: Router) {
  }

  displayedColumns: string[] = ["name", "address", "betreiber", "typ"];


  public navigateToDetail(kindergardenId: number){
    this.router.navigate([`/kindergardens/${kindergardenId}`]);
  }
}
