from django.contrib.auth.models import AbstractUser
from django.db import models

class User(AbstractUser):
    name    = models.CharField(max_length= 255, unique= False)
    is_email_verified = models.BooleanField(default= False) # we want this field for otp
    otp = models.CharField(max_length=6)

    def __str__(self):
        return self.email