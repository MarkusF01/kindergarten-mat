import {Component, OnInit} from '@angular/core';
import {StoreService} from "../shared/store.service";
import {ActivatedRoute} from "@angular/router";
import {Typ} from "../shared/interfaces/Kindergarden";
import {BackendService} from "../shared/backend.service";

@Component({
  selector: 'app-kindergarden-detail',
  templateUrl: './kindergarden-detail.component.html',
  styleUrls: ['./kindergarden-detail.component.scss']
})
export class KindergardenDetailComponent implements OnInit {

  public id!: number;
  public typ = Typ;

  constructor(private route: ActivatedRoute, public storeService: StoreService, private backendService: BackendService) {}

  ngOnInit() {
    this.backendService.getKindergardens()

    const id = this.route.snapshot.paramMap.get('id');
    if(id !== null){
      this.id = parseInt(id)-1;
    }
  }


}
