import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class GroupService {
  // Set up link to backend
  url = "http://localhost:4000";
  constructor(private http: HttpClient) {}

  getGroups() {
    return this.http.get(`${this.url}/groups`);
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
