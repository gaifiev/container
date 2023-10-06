package Fabric;

import Interfaces.IGameItem;
import Product.Gold;

public class GoldGenerator extends ItemGenerator {

    public IGameItem createItem() {
        return new Gold();
    }

}
