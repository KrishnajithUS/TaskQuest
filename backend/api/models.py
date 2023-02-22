from django.db import models
from django.contrib.auth import get_user_model
User = get_user_model()

# Create your models here.


class App(models.Model):
    creator = models.ForeignKey(User, on_delete=models.CASCADE)
    name = models.CharField(max_length=100)
    link = models.URLField()
    category = models.CharField(max_length=50)
    image = models.ImageField(
        upload_to='screenshots', blank=True, null=True)
    sub_category = models.CharField(max_length=50)
    points = models.IntegerField(blank=True,null=True)
    task_completed = models.BooleanField(default=False)

    def __str__(self):
        return self.name

    def task_details(self):
        if self.screenshots is not None:
            return True
        else:
            return False


class AppAdded(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    app = models.OneToOneField(App, on_delete=models.CASCADE)
    screenshot = models.ImageField(
        upload_to='screenshots', blank=True, null=True)
