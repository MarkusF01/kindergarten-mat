import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Kindergarden} from './interfaces/Kindergarden';
import {StoreService} from './store.service';
import {Child, ChildResponse} from './interfaces/Child';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  constructor(private http: HttpClient, private storeService: StoreService) {
  }

  public getKindergardens() {
    this.http.get<Kindergarden[]>('http://localhost:5000/kindergardens').subscribe(data => {
      this.storeService.kindergardens = data;
    });
  }

  public getChildrenCurrentPage() {
    this.http.get<ChildResponse[]>(this.getChildrenUrl(), {observe: 'response'}).subscribe(data => {
      this.storeService.children = data.body!.map(child => ({...child, isLoading: false}));
      this.storeService.childrenTotalCount = Number(data.headers.get('X-Total-Count'));
      this.storeService.initialDataLoading = false;
    });
  }

  public addChildData(child: Child, isSuccessful?: (success: boolean) => void) {
    child.registerDate = new Date().toISOString().split('T')[0];
    this.http.post('http://localhost:5000/childs', child).subscribe({
      next: () => {
        this.getChildrenCurrentPage()
        isSuccessful && isSuccessful(true);
      },
      error: () => {
        console.log("error adding child")
        isSuccessful && isSuccessful(false);
      }
    })
  }

  public deleteChildData(child: ChildResponse) {
    child.isLoading = true;
    this.http.delete(`http://localhost:5000/childs/${child.id}`).subscribe(_ => {
      this.getChildrenCurrentPage();
    })
  }

  private getChildrenUrl(): string {
    let base = `http://localhost:5000/childs?_expand=kindergarden&_page=${this.storeService.currentPage + 1}&_limit=${this.storeService.childrenPerPage}`;
    if (this.storeService.currentKindergardenId != -1) {
      base += `&kindergardenId=${this.storeService.currentKindergardenId}`;
    }
    if (this.storeService.currentSort.active !== '' && this.storeService.currentSort.direction !== '') {
      const prefix = this.storeService.currentSort.direction == "desc" ? "-" : "";
      base +=`&_sort=` + prefix + `${this.storeService.currentSort.active}`
    }
    console.log(base)
    return base;
  }
}
