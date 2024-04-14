from django.contrib import admin
from .models import Team
# Register your models here.

class TeamAdmin(admin.ModelAdmin):
    list_display = ("first_name", "last_name", "designation")
    
admin.site.register(Team, TeamAdmin)  
