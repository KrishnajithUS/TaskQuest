"""backend URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include,re_path
from django.conf.urls.static import static
from rest_framework.schemas import get_schema_view
from rest_framework.documentation import include_docs_urls
from django.conf import settings
from django.views.generic import TemplateView
urlpatterns = [
    path("api/", include("api.urls")),
    path("admin/", admin.site.urls),
    path('docs/',include_docs_urls(title="TaskQuest")),
    path('schema',get_schema_view(
        title='TaskQuest',
        description='Api Documentation'
    ), name='openap-shcema')
]+static(settings.MEDIA_URL,document_root=settings.MEDIA_ROOT)
#path to react 
urlpatterns += [re_path(r'^.*', TemplateView.as_view(template_name='index.html'))]