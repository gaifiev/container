package Classes;

import java.awt.*;

import Enumerators.TypeOfGearbox;
import Enumerators.TypeOfBody;
import Enumerators.TypeOfFuet;

public abstract class Car {
    private String make;
    private String model;
    private Color color;
    private TypeOfBody typeOfBody;
    private Integer numOfWheels;
    private TypeOfGearbox typeGearbox;
    private TypeOfFuet typeFuet;
    private Float engineCapatcity;

    public Car(String make, String model, Color color, TypeOfBody typeOfBody, Integer numOfWheels,
            TypeOfGearbox typeGearbox, TypeOfFuet typeFuet, Float engineCapatcity) {
        this.make = make;
        this.model = model;
        this.color = color;
        this.typeOfBody = typeOfBody;
        this.numOfWheels = numOfWheels;
        this.typeGearbox = typeGearbox;
        this.typeFuet = typeFuet;
        this.engineCapatcity = engineCapatcity;
    }

    public void movement() {

    }

    public void maintenance() {

    }

    public boolean turnLight() {
        return true;
    }

    public boolean turnWhapers() {
        return true;
    }

    public String getMake() {
        return make;
    }

    public String getModel() {
        return model;
    }

    public Color getColor() {
        return color;
    }

    public TypeOfBody getTypeOfBody() {
        return typeOfBody;
    }

    public Integer getNumOfWheels() {
        return numOfWheels;
    }

    public TypeOfGearbox getTypeGearbox() {
        return typeGearbox;
    }

    public TypeOfFuet getTypeFuet() {
        return typeFuet;
    }

    public Float getEngineCapatcity() {
        return engineCapatcity;
    }

    public void setMake(String make) {
        this.make = make;
    }

    public void setModel(String model) {
        this.model = model;
    }

    public void setColor(Color color) {
        this.color = color;
    }

    public void setTypeOfBody(TypeOfBody typeOfBody) {
        this.typeOfBody = typeOfBody;
    }

    public void setNumOfWheels(Integer numOfWheels) {
        this.numOfWheels = numOfWheels;
    }

    public void setTypeGearbox(TypeOfGearbox typeGearbox) {
        this.typeGearbox = typeGearbox;
    }

    public void setTypeFuet(TypeOfFuet typeFuet) {
        this.typeFuet = typeFuet;
    }

    public void setEngineCapatcity(Float engineCapatcity) {
        this.engineCapatcity = engineCapatcity;
    }

}
