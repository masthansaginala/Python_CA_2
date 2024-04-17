from django.db import models
from django.contrib.auth.models import User

# Create your models here.
 
class Inquiry(models.Model):
    mobile_number = models.CharField(max_length=255)
    description = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    # Foreign key to the User model
    user = models.ForeignKey(User, on_delete=models.CASCADE)