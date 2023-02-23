from django.urls import path
from . import views
urlpatterns = [
    path("registerview/", views.RegisterUserView.as_view()),
    path('loginview/', views.LoginView.as_view()),
    path('createview/', views.CreateAppView.as_view()),
    path('listview/', views.ListAppView.as_view()),
    path('addappview/', views.AddAppView.as_view()),
    path('taskview/', views.TaskCompleted.as_view()),
    path('totalpoints/', views.TotalPoints.as_view()),
    path('logout/', views.LogOut.as_view()),




]
