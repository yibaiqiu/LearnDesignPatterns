'use strict';

class Database{
    constructor(name){
        this.name = name;
    }

    connect(){};
    query(){};
    close(){};
}

class Mysql extends Database{
    constructor(){
        super('Mysql');
    }

    connect(){
        //doing Mysql connect()
        return `${this.name} connect() OK`;
    }

    query(){
        //doing Mysql query()
        return `${this.name} query() OK`;      
    }

    close(){
        //doing Mysql close()
        return `${this.name} close() OK`;         
    }
}

class PostgreSQL extends Database{
    constructor(){
        super('PostgreSQL');
    }

    connect(){
        //doing PostgreSQL connect()
        return `${this.name} connect() OK`;
    }

    query(){
        //doing PostgreSQL query()
        return `${this.name} query() OK`;      
    }

    close(){
        //doing PostgreSQL close()
        return `${this.name} close() OK`;         
    }  
}

class Marvel{
    marvelConnect(){
        return 'Marvel special connect() OK'
    }

    marvelQuery(){
        return 'Marvel special query() OK';
    }

    marvelClose(){
        return 'Marvel special close() OK';
    }
}

class MarvelAdapter extends Database{
    constructor(adaptee){
        super('Marvel')
        this.adaptee = adaptee;
    }

    connect(){
        return this.adaptee.marvelConnect();
    }

    query(){
        return this.adaptee.marvelQuery();
    }

    close(){
        return this.adaptee.marvelClose();
    } 
}

function run(db){
    if(db instanceof Database){
        console.log(db.connect());
        console.log(db.query());
        console.log(db.close());        
    }
}

if(!module.parent){
    run(new Mysql());
    run(new PostgreSQL());
    //Error: database.connect is not a function
    //run(new Marvel());

    run(new MarvelAdapter(new Marvel())); 
}

module.exports = {
    Database: Database,
    Mysql : Mysql,
    PostgreSQL: PostgreSQL,
    Marvel: Marvel,
    MarvelAdapter: MarvelAdapter
}
