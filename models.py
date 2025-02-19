from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class Project(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(255), unique=True, nullable=False)  
    description = db.Column(db.Text, nullable=False)
    url = db.Column(db.String(255), nullable=False)
    image_url = db.Column(db.String(255), nullable=True)
