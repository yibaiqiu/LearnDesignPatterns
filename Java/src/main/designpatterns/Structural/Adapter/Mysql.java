package main.designpatterns.Structural.Adapter;

/**
 * Created by Alex on 2017/6/28.
 */
public class Mysql implements IDatabase{
    private String name = "Mysql";

    @Override
    public void connect() {
        System.out.println(name + " connect() OK");
    }

    @Override
    public void query() {
        System.out.println(name + " query() OK");
    }

    @Override
    public void close() {
        System.out.println(name + " close() OK");
    }
}
