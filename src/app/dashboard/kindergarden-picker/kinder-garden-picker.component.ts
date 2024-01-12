import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {BackendService} from 'src/app/shared/backend.service';
import {StoreService} from 'src/app/shared/store.service';

@Component({
  selector: 'app-kindergarden-picker',
  templateUrl: './kinder-garden-picker.component.html',
  styleUrls: ['./kinder-garden-picker.component.scss'],
})
export class KinderGardenPickerComponent implements OnInit{

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
