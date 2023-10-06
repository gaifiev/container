package Fabric;

import Interfaces.IGameItem;
import Product.Sapphire;

public class SapphireGenerator extends ItemGenerator {

    public IGameItem createItem() {
        return new Sapphire();
    }
    
}
