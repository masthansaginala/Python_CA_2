from django.shortcuts import render
from .models import Inquiry
from rest_framework.response import Response
from rest_framework.views import APIView
from .serializer import InquirySerializer
from rest_framework.permissions import AllowAny
from django.contrib.auth.models import User

class CreateInquiry(APIView):
    permission_classes = [AllowAny]
    def post(self, request):
        serializer = InquirySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors)
class GetUserInquiries(APIView):
    def get(self, request):
        param_from_front_end = request.query_params.get('id')
        inquiries = Inquiry.objects.filter(user_id=param_from_front_end)
        serializer = InquirySerializer(inquiries, many=True)
        return Response(serializer.data)