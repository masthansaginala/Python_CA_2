from django.db import models
from datetime import datetime
from django.conf import settings

class Bikes(models.Model):
    location_choice = (
        ('Dublin', 'Dublin'),
        ('Limerick','limerick'),
        ('Kildare', 'kildare'),
    )
    year_choices = []
    for i in range(2000, (datetime.now().year)+1):
        year_choices.append((i,i))
    seating_choice = [
        ("5","five-seater" ),
        ("7", "seven-seater"),
        ("9", "nine-seater"),
    ]
    bike_name = models.CharField(max_length=30)
    location = models.CharField(choices=location_choice, max_length=100)
    bike_description = models.TextField(max_length=500)
    bike_model_year = models.IntegerField(('year'), choices=year_choices)
    price = models.IntegerField()
    no_of_owners = models.IntegerField()
    colour = models.CharField(max_length=30)
    bike_image_1 =models.FileField(upload_to='images/')
    bike_image_2 =models.FileField(upload_to='images/')
    bike_image_3 =models.FileField(upload_to='images/')
    seating_capacity = models.CharField(('seat'), choices=seating_choice, max_length=30)
    is_feautured = models.BooleanField(default=False)
