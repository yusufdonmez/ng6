import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getUsers(){
    return this.http.get('https://jsonplaceholder.typicode.com/users')
  }
  getUser(userId){
    return this.http.get('https://jsonplaceholder.typicode.com/users/'+userId)
  }
  getPosts(){
    return this.http.get('https://jsonplaceholder.typicode.com/posts')
  }
  getPasses(lat,lng,alt){
    return this.http.get('http://www.n2yo.com/rest/v1/satellite/visualpasses/25544/'+lat+'/'+lng+'/'+alt+'/10/10/&apiKey=LKRPUZ-EHUN5Z-4CGQBN-3WBH')
  }
}
