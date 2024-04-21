from django.urls import path
from .views import CreateInquiry,GetUserInquiries

urlpatterns = [
    path('inquiry/',CreateInquiry.as_view(),name = 'create-inquiries'),
    path('getinquiries/', GetUserInquiries.as_view(), name = 'get-user-inquires'),

]