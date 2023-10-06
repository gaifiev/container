import java.util.ArrayList;
import java.util.List;
import java.util.Random;

import Fabric.BronzeGenerator;
import Fabric.EmeraldGenerator;
import Fabric.GemGenerator;
import Fabric.GoldGenerator;
import Fabric.IronGenerator;
import Fabric.ItemGenerator;
import Fabric.RubyGenerator;
import Fabric.SapphireGenerator;
import Fabric.SilverGanerator;

public class App {

    public static void main(String[] args) {
        // ItemGenerator generatorGold = new GoldGenerator();
        // generatorGold.openReward();

        int bound = 150;

        List<ItemGenerator> listGenerator = new ArrayList<>();
        
        for (int i = 0; i < 5; i++) {
            listGenerator.add(new GemGenerator());
        }

        for (int i = 0; i < 7; i++) {
            listGenerator.add(new EmeraldGenerator());
        }

        for (int i = 0; i < 8; i++) {
            listGenerator.add(new SapphireGenerator());
        }

        for (int i = 0; i < 10; i++) {
            listGenerator.add(new RubyGenerator());
        }

        for (int i = 0; i < 15; i++) {
            listGenerator.add(new GoldGenerator());
        }

        for (int i = 0; i < 25; i++) {
            listGenerator.add(new SilverGanerator());
        }

        for (int i = 0; i < 35; i++) {
            listGenerator.add(new BronzeGenerator());
        }

        for (int i = 0; i < 50; i++) {
            listGenerator.add(new IronGenerator());
        }

        Random random = new Random();
        for (int i = 0; i < 20; i++) {
            int index = random.nextInt(bound);
            listGenerator.get(index).openReward();
        }

    }
}
