import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Contact } from '../models/contact';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
    //baseUrl = 'https://jsonplaceholder.typicode.com';
    baseUrl = 'http://localhost:5076/contact/';


    constructor(protected http: HttpClient) { }

    getHeaders() {
        const headers = new HttpHeaders()
        //.set('X-Auth', 'authKey');
        return headers;
    }
}

@Injectable({
    providedIn: 'root'
})
export class ContactsApiService extends ApiService {
    getAll() {
        const params = new HttpParams()
            .set('page', '1')
            .set('pageSize', '10');
        //return this.http.get<Contact[]>(`${this.baseUrl}/getallcontact`, {params});
        //return this.http.get<Contact[]>(`${this.baseUrl}getallcontact`);
        return this.http.get<Contact[]>(this.baseUrl);
    }

    get(id: number) {
        //return this.http.get<Contact>(`${this.baseUrl}getcontact?id=${id}`);
        return this.http.get<Contact>(`${this.baseUrl}${id}`);
    }

    create(contact: Contact) {
        const headers = this.getHeaders();
        //return this.http.post<Contact>(`${this.baseUrl}addcontact`, contact, {headers});
        return this.http.post<Contact>(this.baseUrl, contact, {headers});
    }

    update(contact: Contact) {
        const headers = this.getHeaders();
        //return this.http.put<Contact>(`${this.baseUrl}updatecontact?id=${contact.id}`, contact, {headers});
        return this.http.put<Contact>(`${this.baseUrl}${contact.id}/`, contact, {headers});
    }

    delete(id: number) {
        const headers = this.getHeaders();
        //return this.http.delete(`${this.baseUrl}deletecontact?id=${id}`, {headers});
        return this.http.delete(`${this.baseUrl}${id}`, {headers});
    }
}
