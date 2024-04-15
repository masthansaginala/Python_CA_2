from django.contrib import admin
from .models import Bikes

# Register your models here.
class BikeAdmin(admin.ModelAdmin):
    list_display = ('bike_name', 'bike_model_year', 'price')

admin.site.register(Bikes, BikeAdmin)
