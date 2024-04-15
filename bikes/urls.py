from django.urls import path
from .views import BikeList, BikeDetail

urlpatterns = [
    path('bikes/',BikeList.as_view(), name = 'bike-list'),
    path('bikes/<int:pk>',BikeDetail.as_view(), name = 'bike-detail'),
]