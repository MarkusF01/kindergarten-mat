import { Injectable } from '@angular/core';
import { Kindergarden } from './interfaces/Kindergarden';
import { ChildResponse } from './interfaces/Child';
import {CHILDREN_PER_PAGE} from "./constants";

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  constructor() { }

  public kindergardens: Kindergarden[] = [];
  public children: ChildResponse[] = [];
  public childrenTotalCount: number = 0;
  public currentPage = 0;
  public childrenPerPage = CHILDREN_PER_PAGE[0];
}
