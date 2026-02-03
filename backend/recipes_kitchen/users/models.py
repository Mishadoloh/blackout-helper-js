from django.contrib.auth.models import AbstractUser
from django.db import models


class Users(AbstractUser):
    username = None
    
    email = models.EmailField(unique=True)
    full_name = models.CharField(max_length=255)
    created_at = models.DateTimeField()

    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = []

    def __str__(self) -> str:
        return self.email
