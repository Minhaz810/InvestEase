from django.contrib.auth.models import AbstractUser
from django.db import models

class User(AbstractUser):
    username = models.CharField(max_length=150, null=True, blank=True, unique=True)
    name = models.CharField(max_length= 255, unique= False)
    email = models.EmailField(unique=True)
    is_email_verified = models.BooleanField(default= False)
    otp = models.CharField(max_length=6,null= True, blank= True)

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['name']

    def __str__(self):
        return self.email