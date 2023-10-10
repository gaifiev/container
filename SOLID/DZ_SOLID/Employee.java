package DZ_SOLID;

import java.util.Date;

// 1) Переписать код в соответствии с Single Responsibility Principle

public class Employee {

    private String name;
    private Date dob;

    public Employee(String name, Date dob, int baseSalary) {
        this.name = name;
        this.dob = dob;
    }

    public String getEmpInfo() {
        return "name - " + name + " , dob - " + dob.toString();
    }

}

class CalculateNetSalary {

    private int baseSalary;

     public CalculateNetSalary(int baseSalary) {
        this.baseSalary = baseSalary;
    }

    public int calculateNetSalary() {
        int tax = (int) (baseSalary * 0.25);// calculate in otherway
        return baseSalary - tax;
    }
}
