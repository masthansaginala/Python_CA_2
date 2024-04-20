from django.shortcuts import render
from .models import Inquiry
from rest_framework.response import Response
from rest_framework.views import APIView
from .serializer import InquirySerializer
from rest_framework.permissions import IsAuthenticated
from django.contrib.auth.models import User

class CreateInquiry(APIView):
    permission_classes = [IsAuthenticated]
    def post(self, request):
        serializer = InquirySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors)