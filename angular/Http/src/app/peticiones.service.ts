import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PeticionesService {
  baseUrl: string;
  baseUrlPost: string;

  constructor(private httpClient: HttpClient) {
    this.baseUrl = 'https://pokeapi.co/api/v2/';
    this.baseUrlPost = 'https://jsonplaceholder.typicode.com/posts/';
  }

  getAllPokemon() {
    return this.httpClient.get(`${this.baseUrl}pokemon`).toPromise();
  }

  getOnePokemon(pUrl: string) {
    return this.httpClient.get(pUrl).toPromise();
  }

  // a apartir de aqui uso jsonplaceholder

  getPost(): Promise<any[]> {
    return this.httpClient.get<any[]>(this.baseUrlPost).toPromise();
  }

  createPost(pTitulo, pBody) {
    const body = {
      title: pTitulo,
      body: pBody,
      userId: 1
    };
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-type': 'application/json; charset=UTF-8' })
    };
    return this.httpClient.post(this.baseUrlPost, body, httpOptions).toPromise();
  }

  updatePost(pPost) {
    const body = pPost;
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-type': 'application/json; charset=UTF-8' })
    };

    return this.httpClient.put(this.baseUrlPost + pPost.id, body, httpOptions).toPromise();

  }

  deletePost(pId) {
    return this.httpClient.delete(this.baseUrlPost + pId).toPromise();
  }
}
