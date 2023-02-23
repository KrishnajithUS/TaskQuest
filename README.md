# Django-React-TaskQuest Application
The website enables the administrator to create new applications and assign tasks to users. Users can view these tasks and earn points by downloading the assigned app, completing the task, and uploading a screenshot.
#Admin Login Credentials
email : admin@gmail.com
password : admin
### Features
* Login/Registration
*Token Authentication
*Create New Apps and Upload Images
*List All the Apps
*User Profile
*User can View the tasks
*User can upload The ScreenShot(Drag and Drop enabled)
*User can view their Completed tasks
*User can view their total Points
## Backend Setup
1. Clone the resporitory: `git clone https://github.com/KrishnajithUS/TaskQuest.git'
2. Change current directory to `backend` folder:`cd backend`
3. Create a virutal environment and install all backend dependencies with pipenv: `pip install requirements.txt`.
4. Activate virtual environment :`source env/bin/activate`
5. Run `python manage.py makemigrations`.
8. Create a superuser: `python manage.py createsuperuser`
9. Run the server: `python manage.py runserver`.
## Frontend Setup
1. Navigate to the folder frontend:`cd frontend`
2. Install the all frontend dependencies using npm: `npm install`.
3.  Run the server: `npm start`.
## Backend API Documentation
API Documentation is generated using the default tool provided by Django Rest Framework.
### View The API documentation
1. Make sure that the Backend Server is running.
2. Navigate to the [localhost:8000/docs/](localhost:8000/docs/)