import app.Book;
import app.BookRepository;
import app.BookService;
import org.junit.jupiter.api.Test;

import java.util.ArrayList;
import java.util.List;

import static org.assertj.core.api.Assertions.assertThat;
import static org.mockito.Mockito.*;

public class BookServiceTest {
    // У вас есть класс BookService, который использует интерфейс BookRepository для
    // получения информации о книгах из базы данных.
    // Ваша задача написать unit-тесты для BookService, используя Mockito для
    // создания мок-объекта BookRepository.
    @Test
    void testFindBookById() {
        BookRepository bookRepository = mock(BookRepository.class);
        BookService bookService = new BookService(bookRepository);

        Book book1 = new Book("1", "Title1", "Author1");
        Book book2 = new Book("2", "Title2", "Author2");
        Book book3 = new Book("3", "Title3", "Author3");

        when(bookRepository.findById("1")).thenReturn(book1);
        when(bookRepository.findById("2")).thenReturn(book2);
        when(bookRepository.findById("3")).thenReturn(book3);

        assertThat(bookService.findBookById("1")).isEqualTo(book1);
        assertThat(bookService.findBookById("2")).isEqualTo(book2);
        assertThat(bookService.findBookById("3")).isEqualTo(book3);

        verify(bookRepository, times(1)).findById("1");
        verify(bookRepository, times(1)).findById("2");
        verify(bookRepository, times(1)).findById("3");
    }

    @Test
    void testFindAllBooks() {
        BookRepository bookRepository = mock(BookRepository.class);
        BookService bookService = new BookService(bookRepository);

        List<Book> books = new ArrayList<>();
        Book book1 = new Book("1", "Title1", "Author1");
        Book book2 = new Book("2", "Title2", "Author2");
        Book book3 = new Book("3", "Title3", "Author3");

        books.add(book1);
        books.add(book2);
        books.add(book3);

        when(bookRepository.findAll()).thenReturn(books);

        assertThat(bookService.findAllBooks()).isEqualTo(books);
        assertThat(bookService.findAllBooks().size()).isEqualTo(3);

        verify(bookRepository, times(2)).findAll();
    }
}