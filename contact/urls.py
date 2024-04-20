from django.urls import path
from .views import CreateInquiry

urlpatterns = [
    path('inquiry/',CreateInquiry.as_view(),name = 'create-inquiries'),
]