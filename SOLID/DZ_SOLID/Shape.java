package DZ_SOLID;

// 3) Переписать код в соответствии с Interface Segregation Principle:
public class Shape {
   
}

/**
 * ShapeArea
 */
interface ShapeArea {
    double area();
}

/**
 * ShapeVolume
 */
interface ShapeVolume {
    double volume();

}

class Circle implements ShapeArea {
    private double radius;

    public Circle(double radius) {
        this.radius = radius;
    }

    @Override
    public double area() {
        return 2 * 3.14 * radius;
    }
}

class Cube implements ShapeVolume {
    private int edge;

    public Cube(int edge) {
        this.edge = edge;
    }

    @Override
    public double volume() {
        return edge * edge * edge;
    }
}
