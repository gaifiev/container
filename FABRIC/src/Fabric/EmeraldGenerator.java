package Fabric;

import Interfaces.IGameItem;
import Product.Emerald;

public class EmeraldGenerator extends ItemGenerator {

    public IGameItem createItem() {
       return new Emerald();
    }
    
}
