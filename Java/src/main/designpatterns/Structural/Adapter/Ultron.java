package main.designpatterns.Structural.Adapter;

/**
 * Created by Alex on 2017/6/28.
 */
public class Ultron implements IMarvelDatabase {
    private String name = "Ultron";

    @Override
    public void marvelConnect() {
        System.out.println(name + " marvelConnect() OK");
    }

    @Override
    public void marvelQuery() {
        System.out.println(name + " marvelQuery() OK");
    }

    @Override
    public void marvelClose() {
        System.out.println(name + " marvelClose() OK");
    }
}
