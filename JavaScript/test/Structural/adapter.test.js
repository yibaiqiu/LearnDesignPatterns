'use strict';

const expect = require('chai').expect;
const dbs = require('../../Structural/Adapter/adapter');
const Database = dbs['Database'];

describe('#Adapter pattern', () => {
    var db_name, db;

    describe('Mysql Test', () => {
        before(() => {
            db_name = 'Mysql';
            db = new dbs[db_name];
        });

        it('Mysql is instance of Database', () => {
            expect(`${db_name}`).to.be.equal('Mysql');
            //expect(db).to.be.an.instanceof(Database);
        });

        it('Connect ok', () => {
            expect(db.connect()).to.be.equal(`${db_name} connect() OK`);
        });

        it('Query ok', () => {
            expect(db.query()).to.be.equal(`${db_name} query() OK`);
        });

        it('Close ok', () => {
            expect(db.close()).to.be.equal(`${db_name} close() OK`);
        });        
    });

    describe('PostgreSQL Test', () => {
        before(() => {
            db_name = 'PostgreSQL';
            db = new dbs[db_name];
        });

        it('PostgreSQL is instance of Database', () => {
            expect(db).to.be.an.instanceof(Database);
        });        

        it('Connect ok', () => {
            expect(db.connect()).to.be.equal(`${db_name} connect() OK`);
        });

        it('Query ok', () => {
            expect(db.query()).to.be.equal(`${db_name} query() OK`);
        });

        it('Close ok', () => {
            expect(db.close()).to.be.equal(`${db_name} close() OK`);
        });        
    }); 

    describe('Marvel Test', () => {
        before(() => {
            db_name = 'Marvel';
            db = new dbs['MarvelAdapter'](new dbs[db_name]);
        });

        it('Marvel is not instance of Database', () => {
            expect(new dbs[db_name]).to.be.not.instanceof(Database);
        }); 

        it('MarvelAdapter is instance of Database', () => {
            expect(db).to.be.an.instanceof(Database);
        });        

        it('Connect ok', () => {
            expect(db.connect()).to.be.equal(`${db_name} special connect() OK`);
        });

        it('Query ok', () => {
            expect(db.query()).to.be.equal(`${db_name} special query() OK`);
        });

        it('Close ok', () => {
            expect(db.close()).to.be.equal(`${db_name} special close() OK`);
        });        
    });        
});
