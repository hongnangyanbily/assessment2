import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import "rxjs/add/operator/map";

@Injectable({
  providedIn: "root"
})
export class GroupService {
  // Set up link to backend
  url = "http://localhost:4000";
  constructor(private http: Http) {}

  getGroups() {
    return this.http.get(`${this.url}/groups`).map(res => res.json());
  }

  getGroupById(id) {
    return this.http.get(`${this.url}/groups/${id}`);
  }

  addGroup(title, description, category, status) {
    const group = {
      title: title,
      description: description,
      category: category,
      status: status
    };

    // Set link for adding a new group
    return this.http.post(`${this.url}/groups/add`, group);
  }

  updateGroup(id, title, description, category, status) {
    const group = {
      title: title,
      description: description,
      category: category,
      status: status
    };

    // Set link for updating a new group
    return this.http.post(`${this.url}/groups/update/${id}`, group);
  }

  deleteGroup(id) {
    return this.http.get(`${this.url}/groups/delete/${id}`);
  }
}
