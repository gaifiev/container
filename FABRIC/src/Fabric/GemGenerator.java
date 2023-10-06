package Fabric;

import Interfaces.IGameItem;
import Product.Gem;

public class GemGenerator extends ItemGenerator {

    public IGameItem createItem() {
        return new Gem();
    }
    
}
