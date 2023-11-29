import app.User;
import app.UserRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import static org.assertj.core.api.Assertions.*;

public class UserTest {
    private User user1;
    private User user2;
    private User user3;
    private User user4;

    @BeforeEach
    void testInit() {
        user1 = new User("User1", "Password1", true);
        user2 = new User("User2", "Password2", false);
        user3 = new User("User3", "Password3", true);
        user4 = new User("User4", "Password4", false);
    }

    @Test
    void testUserAccess() {
        assertThat(user1.authenticate("User1", "Password1")).isTrue();
        assertThat(user2.authenticate("User2", "Password2")).isTrue();
        assertThat(user3.authenticate("User3", "Password3")).isTrue();
        assertThat(user4.authenticate("User4", "Password4")).isTrue();
    }

    @Test
    void testUserIsUnavailable() {
        assertThat(user1.authenticate("User", "Password")).isFalse();
        assertThat(user4.authenticate("User5", "Password5")).isFalse();
    }

    @Test
    void testAddUser() {
        UserRepository userRepository = new UserRepository();
        userRepository.addUser(user1);
        userRepository.addUser(user2);
        userRepository.addUser(user3);
        int quantityBefore = userRepository.data.size();
        userRepository.addUser(user4);
        assertThat(userRepository.data.size()).isEqualTo(quantityBefore + 1);

    }

    @Test
    void testCheckPass(){
        UserRepository userRepository = new UserRepository() ;
        userRepository.addUser(user1);
        userRepository.addUser(user2);
        userRepository.addUser(user3);
        userRepository.addUser(user4);
        userRepository.checkPass();
        assertThat(userRepository.data.size()).isEqualTo(2);
    }
}
