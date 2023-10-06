package Fabric;

import Interfaces.IGameItem;
import Product.Iron;

public class IronGenerator  extends ItemGenerator{
    
    public IGameItem createItem() {
        return new Iron();
    }
    
}
