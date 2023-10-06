package Fabric;

import Interfaces.IGameItem;
import Product.Ruby;

public class RubyGenerator  extends ItemGenerator {

    public IGameItem createItem() {
        return new Ruby();
    }
    
}
