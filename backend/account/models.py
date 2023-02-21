# implementing custom user model
from django.db import models
from django.contrib.auth.hashers import make_password
from django.contrib.auth.models import (
    BaseUserManager, AbstractBaseUser
)


# if i include additional fields it is better to use a custom user manager
class UserManager(BaseUserManager):
    def create_user(self, email, first_name, last_name, password=None, **kwargs):
        if not email:
            raise ValueError('User must have an email')
        user = self.model(email=self.normalize_email(email),
                          first_name=first_name, last_name=last_name,**kwargs)
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, email, first_name, last_name, password=None,**kwargs):
        user = self.create_user(email, first_name,
                                last_name, password,**kwargs)
        user.is_admin = True
        user.save(using=self._db)
        return user


class User(AbstractBaseUser):
    email = models.EmailField(verbose_name='emial address',
                              max_length=255,
                              unique=True
                              )
    first_name = models.CharField(max_length=200)
    last_name = models.CharField(max_length=100)
    profile_picture = models.ImageField(
        upload_to='uploads/', null=True, blank=True)
    is_active = models.BooleanField(default=True)
    is_admin = models.BooleanField(default=False)
    objects = UserManager()
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['first_name', 'last_name']

    def __str__(self):
        return self.email

    def has_perm(self, perm, obj=None):
        return True

    def has_module_perms(self, app_label):
        return True

    @property
    def is_staff(self):
        return self.is_admin
