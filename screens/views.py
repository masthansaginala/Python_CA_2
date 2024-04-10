from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.views import APIView
from .models import Team
from .serializer import TeamSerializer

# Create your views here.
def home(request):
    return render(request, 'screens/home.html')

class TeamList(APIView):
    def get(self,request):
        data = Team.objects.all()
        serializer = TeamSerializer(data, many = True)
        return Response(serializer.data)
class TeamDetail(APIView):
    def get(self,request, pk):
        try:
            data = Team.objects.get(pk = pk)
        except Team.DoesNotExist:
            return Response(status=404)
        serializer = TeamSerializer(data)
        return Response(serializer.data)
    