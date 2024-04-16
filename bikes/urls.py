from django.urls import path
from .views import BikeList,BikeDetail,FeauturedList

urlpatterns = [
    path('bikes/',BikeList.as_view(), name = 'bike-list'),
    path('bikes/<int:pk>',BikeDetail.as_view(), name = 'bike-detail'),
    path('bikes/featured',FeauturedList.as_view(), name = 'feautured-list'),
    
]
