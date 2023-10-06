package Fabric;

import Interfaces.IGameItem;
import Product.Silver;

public class SilverGanerator extends ItemGenerator {

    public IGameItem createItem() {
        return new Silver();
    } 
    
}
