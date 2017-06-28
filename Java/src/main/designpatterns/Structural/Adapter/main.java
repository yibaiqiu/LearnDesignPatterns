package main.designpatterns.Structural.Adapter;

/**
 * Created by Alex on 2017/6/28.
 */
public class main {
    public static void main(String[] args) {
        Mysql mysql = new Mysql();
        PostgreSQL postgresql = new PostgreSQL();
        IDatabase marvel = new MarvelAdapter(new Ultron());

        queryDatabase(mysql);
        queryDatabase(postgresql);
        queryDatabase(marvel);

    }

    static void queryDatabase(IDatabase db) {
        db.connect();
        db.query();
        db.close();
    }
}
