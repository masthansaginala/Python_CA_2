from django.db import models

# Create your models here.
class Team(models.Model):
    first_name = models.CharField(max_length = 30)
    last_name = models.CharField(max_length = 30)
    designation = models.CharField(max_length = 30)
    image = models.ImageField(upload_to ='media/')
    email = models.EmailField(max_length=254)
    phone_number = models.CharField(max_length = 15)

    def __str__(self):
        return self.first_name
