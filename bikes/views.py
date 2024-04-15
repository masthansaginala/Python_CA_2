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
class BikeDetail(APIView):
    def get(self,request, pk):
        try:
            data = Bikes.objects.get(pk = pk)
        except Bikes.DoesNotExist:
            return Response(status=404)
        serializer = BikeSerializer(data)
        return Response(serializer.data)
    




