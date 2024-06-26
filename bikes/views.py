from django.shortcuts import render
from .models import Bikes
from rest_framework.response import Response
from rest_framework.views import APIView
from .serializer import BikeSerializer
# Create your views here.
#This Api is for Listing Bikes.
class BikeList(APIView):
    def get(self, request):
        bikes = Bikes.objects.all()
        serializer = BikeSerializer(bikes, many=True, context={'request': request})
        return Response(serializer.data)
class BikeDetail(APIView):
    def get(self, request, pk):
        try:
            bike = Bikes.objects.get(pk=pk)
        except Bikes.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)
        
        serializer = BikeSerializer(bike, context={'request': request})
        return Response(serializer.data)
    

#This Api is for Listing Featured and Non Feautured Bike Lists.
class FeauturedList(APIView):
    def get(self, request):
        category = request.GET.get('is_feautured')
        data = Bikes.objects.filter(is_feautured = category)
        serializer = BikeSerializer(data, many = True)
        return Response(serializer.data)
    

class BikeSearch(APIView):
    def get(self, request):
        search_param = request.query_params.get('search', '')
        bikes = Bikes.objects.filter(bike_name__icontains=search_param)
        serializer = BikeSerializer(bikes, many=True, context={'request': request})
        return Response(serializer.data)


