from django.urls import path
from .views import home, TeamList,TeamDetail

urlpatterns = [
    path('', home, name = 'screens/home'),
    path('team/',TeamList.as_view(), name = 'team-list'),
    path('team/<int:pk>', TeamDetail.as_view(), name = 'team-detail')
]
