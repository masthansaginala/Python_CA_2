from django.contrib import admin
from .models import Team
# Register your models here.

class TeamAdmin(admin.ModelAdmin):
    list_display = ("first_name", "last_name", "designation")
<<<<<<< HEAD

admin.site.register(Team, TeamAdmin)  
=======
admin.site.register(Team, TeamAdmin)
>>>>>>> 3aa4efe295bf39f5c63979f1840c6c1775476d0c
