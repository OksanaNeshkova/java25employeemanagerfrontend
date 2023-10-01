import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environments';
import { Observable } from 'rxjs';
import { Employee } from './employee';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private apiServevUrl = environment.apiBaseUrl;

  //inject HTTPClient in the service layer constructor
  constructor(private http: HttpClient) { }

  //Method to get all employees from the backend API server
  public getEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(`${this.apiServevUrl}/employee/all`)
  }

  //Method to add an employee from the backend API service
  public addEmployee(employee: Employee): Observable<Employee> {
    return this.http.post<Employee>(`${this.apiServevUrl}/employee/add`, employee)
  }

  //Method for updating
  public updateEmployee(employee: Employee): Observable<Employee> {
    return this.http.put<Employee>(`${this.apiServevUrl}/employee/update`, employee)
  }

  //Method for deleting
  public deleteEmployee(employeeId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServevUrl}/employee/delete/${employeeId}`)
  }


}

