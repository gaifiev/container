package InMemoryModel;

/**
 * iModelChanger
 */

// интерфейс смены модели
public interface iModelChanger {
    public void NotifyChange(iModelChanger sender);
}