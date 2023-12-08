import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Kindergarden } from './interfaces/Kindergarden';
import { StoreService } from './store.service';
import { Child, ChildResponse } from './interfaces/Child';
@Injectable({
  providedIn: 'root'
})
export class BackendService {

  constructor(private http: HttpClient, private storeService: StoreService) { }

  public getKindergardens() {
    this.http.get<Kindergarden[]>('http://localhost:5000/kindergardens').subscribe(data => {
      this.storeService.kindergardens = data;
    });
  }

  public getChildrenCurrentPage() {
    this.http.get<ChildResponse[]>(`http://localhost:5000/childs?_expand=kindergarden&_page=${this.storeService.currentPage+1}&_limit=${this.storeService.childrenPerPage}`, { observe: 'response' }).subscribe(data => {
      this.storeService.children = data.body!;
      this.storeService.childrenTotalCount = Number(data.headers.get('X-Total-Count'));
    });
    }

    public addChildData(child: Child, isSuccessful?: (success: boolean) => void) {
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

    public deleteChildData(childId: string) {
      this.http.delete(`http://localhost:5000/childs/${childId}`).subscribe(_=> {
        this.getChildrenCurrentPage();
      })
    }
  }
