from django.urls import path
from .views import BikeList

urlpatterns = [
    path('bikes/',BikeList.as_view(), name = 'bike-list'),
]