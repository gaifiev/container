package Paradigms_of_Programming.dz6;

public class Stopwatch {
    private boolean isRunning;
    private double startTime;
    private double pauseStartTime;
    private double totalPausedTime;

    public static void main(String[] args) throws InterruptedException {
        Stopwatch stopwatch = new Stopwatch();

        System.out.println("Запуск секундомера..");
        stopwatch.start();

        Thread.sleep(2000); // ожидание

        System.out.println("Пауза секундомера..");
        stopwatch.pause();

        Thread.sleep(3000); // ожидание

        System.out.println("Выход из паузы..");
        stopwatch.resume();

        Thread.sleep(2000); // ожидание

        double elapsedMillis = stopwatch.stop(); // остановка
        double elapsedSeconds = elapsedMillis / 1000.0;
        System.out.println("Секундомер остановлен. Прошло времени: " + elapsedSeconds + " секунд.");
    }

    public Stopwatch() {
        isRunning = false;
        startTime = 0;
        pauseStartTime = 0;
        totalPausedTime = 0;
    }
   // Метод для запуска секундомера
    public void start() {
        if (!isRunning) {
            isRunning = true;
            double currentTime = System.currentTimeMillis();
            startTime = currentTime - totalPausedTime;
        }
    }
    // Метод для приостановки секундомера
    public void pause() {
        if (!isRunning) {
            isRunning = false;
            pauseStartTime = System.currentTimeMillis();
        }
    }
    // Метод для продолжения отсчета после паузы
    public void resume() {
        if (!isRunning) {
            isRunning = true;
            double pausedTime = System.currentTimeMillis() - pauseStartTime;
            totalPausedTime += pausedTime;
        }
    }
   // Метод для остановки секундомера и получения пройденного времени
    public double stop() {
        if (isRunning) {
            isRunning = false;
            double endTime = System.currentTimeMillis();
            double elapsedTime = endTime - startTime - totalPausedTime;
            return elapsedTime;
        } else {
            return 0;
        }
    }

    
}
