from django.contrib.auth.models import AbstractUser
from django.db import models

class CustomUser(AbstractUser):
    name    = models.CharField(max_length= 255, unique= False)
    is_verified = models.BooleanField(default= False) # we want this field for otp

    def __str__(self):
        return self.email