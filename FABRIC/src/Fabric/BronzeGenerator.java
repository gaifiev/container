package Fabric;

import Interfaces.IGameItem;
import Product.Bronze;

public class BronzeGenerator extends ItemGenerator {

    public IGameItem createItem() {
        return new Bronze();
    }
    
}
