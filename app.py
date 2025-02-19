from flask import Flask, render_template, request, jsonify
from models import db, Project
from sqlalchemy.exc import IntegrityError
from config_module import Config


app = Flask(__name__)
app.config.from_object(Config)

db.init_app(app)

@app.route('/')
def index():
    projects = Project.query.all()
    return render_template('index.html', projects=projects)

@app.route('/api/projects', methods=['GET'])
def get_projects():
    projects = Project.query.all()
    projects_list = [
        {
            'id': project.id,
            'title': project.title,
            'description': project.description,
            'url': project.url
        } for project in projects
    ]
    return jsonify({'projects': projects_list}), 200

@app.route('/api/projects', methods=['POST'])
def add_project():
    data = request.json
    if not data or 'title' not in data or 'description' not in data or 'url' not in data:
        return jsonify({'error': 'Missing required fields'}), 400

    
    new_project = Project(
        title=data['title'],
        description=data['description'],
        url=data['url'],
        image_url=data.get('image_url') 
    )

    try:
        db.session.add(new_project)
        db.session.commit()
        return jsonify({'message': 'Project added successfully!', 'project': {
            'id': new_project.id,
            'title': new_project.title,
            'description': new_project.description,
            'url': new_project.url,
            'image_url': new_project.image_url  
        }}), 201
    except IntegrityError as e:
        db.session.rollback()
        print(f"IntegrityError details: {e.orig}")  
        return jsonify({'error': 'Project with this title already exists'}), 409
    except Exception as e:
        db.session.rollback()
        print(f"Exception: {str(e)}")  
        return jsonify({'error': f'Internal Server Error: {str(e)}'}), 500

if __name__ == '__main__':
    app.run(debug=True)
