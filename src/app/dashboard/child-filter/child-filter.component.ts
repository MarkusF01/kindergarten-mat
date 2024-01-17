import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {BackendService} from 'src/app/shared/backend.service';
import {StoreService} from 'src/app/shared/store.service';

@Component({
  selector: 'app-child-filter',
  templateUrl: './child-filter.component.html',
  styleUrls: ['./child-filter.component.scss'],
})
export class ChildFilterComponent implements OnInit{

  constructor(private formbuilder: FormBuilder,
              public storeService: StoreService,
              public backendService: BackendService,
  ) {
  }
  public kindergardenForm: any;

  ngOnInit(): void {
    this.kindergardenForm = this.formbuilder.group({
      kindergardenId: [-1, Validators.required],
    })
  }

  onChange() {
    console.log("called")
    if(this.kindergardenForm.valid) {
      console.log(this.kindergardenForm.value.kindergardenId)
      this.storeService.currentKindergardenId = this.kindergardenForm.value.kindergardenId;
      this.backendService.getChildrenCurrentPage();
    }
  }
}
