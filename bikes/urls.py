from django.urls import path
from .views import BikeList, FeauturedList

urlpatterns = [
    path('bikes/',BikeList.as_view(), name = 'bike-list'),
    path('bikes/featured',FeauturedList.as_view(), name = 'feautured-list'),
]