import { Department } from "../../department/model/department";
import { Role } from "../../role/model/role";

export interface Employee {
  employeeId: number,
  firstName: string,
  lastName: string,
  email: string,
  password: string,
  address: string,
  isActive: boolean,
  department: Department,
  role: Set<Role>
}
