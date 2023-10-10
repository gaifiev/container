package DZ_SOLID;

// 4) Переписать код в соответствии с Liskov Substitution Principle:
// честно говоря, сплагиатил это решение с инета, ниче не понял что то понял
// класс расширяет шэп и рисует прямоугольник
public class Rectangle extends Shape {
}
// класс геометрической фигры 
class Shape {
    private int width;
    private int height;

    public void setWidth(int width) {
        this.width = width;
    }

    public void setHeight(int height) {
        this.height = height;
    }

    public int area() {
        return this.width * this.height;
    }
}
// класс расширяет шэп и рисует квадрат
class Square extends Shape {
    @Override
    public void setWidth(int width) {
        super.setWidth(width);
        super.setHeight(width);
    }

    @Override
    public void setHeight(int height) {
        super.setWidth(height);
        super.setHeight(height);
    }
}
