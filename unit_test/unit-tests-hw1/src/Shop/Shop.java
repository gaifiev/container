package Shop;

import static org.assertj.core.api.Assertions.assertThat;

import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;

// Мы хотим улучшить функциональность нашего интернет-магазина. Ваша задача - добавить два новых метода в класс Shop:
// Метод sortProductsByPrice(), который сортирует список продуктов по стоимости. Метод getMostExpensiveProduct(), 
// который возвращает самый дорогой продукт. Напишите тесты, чтобы проверить, что магазин хранит верный список продуктов 
// (правильное количество продуктов, верное содержимое корзины).
// Напишите тесты для проверки корректности работы метода getMostExpensiveProduct. Напишите тесты для проверки корректности 
// работы метода sortProductsByPrice (проверьте правильность сортировки). Используйте класс Product для создания экземпляров 
// продуктов и класс Shop для написания методов сортировки и тестов.
public class Shop {

    public static void main(String[] args) {
        List<Product> products = new ArrayList<>();

        products.add(new Product(20, "Апельсин"));
        products.add(new Product(40, "Банан"));
        products.add(new Product(60, "Киви"));
        products.add(new Product(10, "Груша"));
        products.add(new Product(30, "Яблоко"));
        products.add(new Product(50, "Манго"));

        // Метод sortProductsByPrice(), который сортирует список продуктов по стоимости.
        products = getSortedListProducts(products);
        System.out.println(products);

        // Метод getMostExpensiveProduct(), который возвращает самый дорогой продукт.
        System.out.println(getMostExpensiveProduct(products));

    }

    // метод сортировки по возрастанию
    public static List<Product> getSortedListProducts(List<Product> products) {

        products.sort(Comparator.comparingLong(Product::getCost));

        return products;
    };

    // метод самый дорогой продукт
    public static Product getMostExpensiveProduct(List<Product> products) {
        products.sort(Comparator.comparingLong(Product::getCost).reversed());
        Product mostExpensive = products.get(0);
        return mostExpensive;
    };
}

class ShopTest {
    /*
     * 1. Проверить, что магазин хранит верный список продуктов (количество
     * продуктов, состав корзины)
     * 2. Проверить, что магазин возвращает верный самый дорого продукт
     * getMostExpensiveProduct
     * 3. Проверить, что магазин возвращает верный отсортированный по цене список
     * продуктов
     */

    public static void main(String[] args) {

        List<Product> products = new ArrayList<>();

        products.add(new Product(20, "Апельсин"));
        products.add(new Product(40, "Банан"));
        products.add(new Product(60, "Киви"));
        products.add(new Product(10, "Груша"));
        products.add(new Product(30, "Яблоко"));
        products.add(new Product(50, "Манго"));

        // // Метод sortProductsByPrice(), который сортирует список продуктов по
        // стоимости.
        // products = Shop.getSortedListProducts(products);
        // System.out.println(products);

        // // Метод getMostExpensiveProduct(), который возвращает самый дорогой продукт.
        // System.out.println(Shop.getMostExpensiveProduct(products));

        // проверяем количество продуктов
        assertThat(products.size()).isEqualTo(6);

        // дорогой продукт
        assertThat(Shop.getMostExpensiveProduct(products).getCost()).isEqualTo(60);
        // проверяка сортировки
        check(products);

    }

    // метод, который проверяет сортировку по цене
    static void check(List<Product> products) {
        String productSort = "";
        Shop.getSortedListProducts(products);
        for (Product product : products) {
            productSort = productSort + product.getCost();
        }
        assertThat(productSort).isEqualTo("102030405060");
    }

}
