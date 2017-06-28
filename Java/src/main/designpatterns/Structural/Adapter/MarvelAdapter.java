package main.designpatterns.Structural.Adapter;

/**
 * Created by Alex on 2017/6/28.
 */
public class MarvelAdapter implements IDatabase {
    private IMarvelDatabase adaptee;

    public MarvelAdapter(IMarvelDatabase adaptee){
        this.adaptee = adaptee;
    }

    @Override
    public void connect() {
        this.adaptee.marvelConnect();
    }

    @Override
    public void query() {
        this.adaptee.marvelQuery();
    }

    @Override
    public void close() {
        this.adaptee.marvelClose();
    }
}
