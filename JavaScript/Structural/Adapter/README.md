# Adapter / Wrapper

## 意图
将一个类的接口转换成客户希望的另外一个接口。Adapter模式使得原本由于接口不兼容而不能一起工作的那些类可以在一起工作。

Convert the interface of a class into another interface clients expect. 
Adapter lets classes work together that couldn't otherwise because of 
incompatible interfaces. 

## 适配器模式的应用
适配器模式是一种我们都不希望使用的模式，因为我们一旦需要使用适配器模式，则说明有新增接口无法和我们已有的接口配合工作了。

例如当前我负责的项目就遇到一个这样的问题：我们需要对接一个第三方公司的系统，由于这个第三方公司的系统已经使用很长时间，他们系统采用的接口数据传输格式为XML格式，而我们的系统接口传输的数据格式为JSON。任何一方都不可能由于这一个对接，修改自己系统默认的数据传输格式，这个时候，只需要在中间有一个Adapter负责将XML和JSON格式进行转换即可。下面是一些适配器模式应用的例子。

1. XML2JSON适配器。
2. 数据库连接适配器。我们自己定义的DB接口有`connect()`,`query()`和`close()`三个接口。新购买的Marvel DB的接口却是`marvelConnect()`，`marvelQuery()`和`marvelClose()`。要接入Marvel DB，就需要适配器模式。
3. 来一个现实世界的Adapter。电源转换插头。从香港买过港版的ipad的同学都会发现，港版的ipad的电源插头，在内地一般没有对应的插座可以使用，这个时候怎么办呢？ 再买一个港式插头转大陆插头的适配器，也就是Adapter。

## 实现
由于JavaScript不支持Interface，采用ES6的class模拟实现。
