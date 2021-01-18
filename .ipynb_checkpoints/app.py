from flask import Flask
from flask import render_template 
from flask import jsonify
# Import the functions we need from SQL Alchemy
import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine

rds_connection_string = "postgres:PostgreSQL@localhost:5432/Coders_D2"
engine = create_engine(f'postgresql://{rds_connection_string}')

base=automap_base()
base.prepare(engine, reflect=True)
# coders_d=base.classes.coders_d while is this line not being read?

app = Flask(__name__)
session = Session(engine)

@app.route("/")
def mainpage():
    # homepage = render_template("index.html")
    # return homepage 
    return (
       "Hello"
)

if __name__ == '__main__':
    app.run(debug=True)