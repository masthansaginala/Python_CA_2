from django.urls import path
<<<<<<< HEAD
from .views import BikeList, FeauturedList

urlpatterns = [
    path('bikes/',BikeList.as_view(), name = 'bike-list'),
    path('bikes/featured',FeauturedList.as_view(), name = 'feautured-list'),
=======
from .views import BikeList, BikeDetail

urlpatterns = [
    path('bikes/',BikeList.as_view(), name = 'bike-list'),
    path('bikes/<int:pk>',BikeDetail.as_view(), name = 'bike-detail'),
>>>>>>> 088fa85c2a355b4d2920dcb172c382d148cb068f
]