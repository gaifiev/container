import java.util.ArrayList;
import java.util.List;

import Controller.Controller;
import Controller.Interface.iGetModel;
import Controller.Interface.iGetView;
import Model.ModelStudent;
import Model.Domain.Student;
import View.ViewStudent;

/**
 * App
 */
public class App {

    public static void main(String[] args) {
        List<Student> students = new ArrayList<>();
        Student s1 = new Student("Сергей", 21, 101);
        Student s2 = new Student("Андрей", 22, 111);
        Student s3 = new Student("Иван", 22, 121);
        Student s4 = new Student("Игорь", 23, 131);
        Student s5 = new Student("Даша", 25, 141);
        Student s6 = new Student("Лена", 23, 151);
        students.add(s1);
        students.add(s2);
        students.add(s3);
        students.add(s4);
        students.add(s5);
        students.add(s6);

        iGetModel model = new ModelStudent(students);
        iGetView view = new ViewStudent();

        Controller controller = new Controller(model, view);
        controller.update();
    }
}