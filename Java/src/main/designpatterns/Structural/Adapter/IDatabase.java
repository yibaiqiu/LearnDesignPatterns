package main.designpatterns.Structural.Adapter;

/**
 * Created by Alex on 2017/6/28.
 */
public interface IDatabase {
    public void connect();
    public void query();
    public void close();
}
