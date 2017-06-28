package main.designpatterns.Structural.Adapter;

/**
 * Created by Alex on 2017/6/28.
 */
public interface IMarvelDatabase {
    //Yes it's Marvel Database
    public void marvelConnect();
    public void marvelQuery();
    public void marvelClose();
}
