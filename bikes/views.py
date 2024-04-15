from django.shortcuts import render
from .models import Bikes
from rest_framework.response import Response
from rest_framework.views import APIView
from .serializer import BikeSerializer
# Create your views here.
class BikeList(APIView):
    def get(self,request):
        data = Bikes.objects.all()
        serializer = BikeSerializer(data, many = True)
        return Response(serializer.data)




