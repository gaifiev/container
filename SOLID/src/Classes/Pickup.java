package Classes;

import java.awt.Color;

import Enumerators.TypeOfBody;
import Enumerators.TypeOfFuet;
import Enumerators.TypeOfGearbox;
import Interfaces.IFuelStation;
import Interfaces.IWipingCar;

public class Pickup extends Car implements IFuelStation, IWipingCar {

    private Float loadCapacity;

    public Pickup(String make, String model, Color color, Integer numOfWheels,
            TypeOfGearbox typeGearbox, TypeOfFuet typeFuet, Float engineCapatcity) {
        super(make, model, color, TypeOfBody.PICKUP , numOfWheels, typeGearbox, typeFuet, engineCapatcity);

        this.loadCapacity = loadCapacity;
    }

    @Override
    public void fuel() {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'fuel'");
    }

    @Override
    public void wipWindShilde() {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'wipWindShilde'");
    }

    @Override
    public void wipHeadLights() {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'wipHeadLights'");
    }

    @Override
    public void wipMirrows() {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'wipMirrows'");
    }
}
