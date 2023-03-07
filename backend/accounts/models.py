from django.db import models
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin, BaseUserManager

class UserManager(BaseUserManager):
    def create_user(self, email, password=None, **extras):
        if not email:
            raise ValueError('Requires email address')
        
        email = self.normalize_email(email)
        user = self.model(email=email, **extras)
        user.set_password(password)

        user.save()

        return user


class User(AbstractBaseUser, PermissionsMixin):
    email = models.EmailField(max_length=255, unique=True)
    first_name = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255)
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)

    objects = UserManager()

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['first_name', 'last_name']

    def get_full_name(self):
        return "{} {}".format(self.first_name, self.last_name)
    
    def get_short_name(self):
        return self.first_name
    
    def __str__(self):
        return self.email