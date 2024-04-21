from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.permissions import AllowAny, IsAuthenticated
from django.contrib.auth import authenticate
from django.contrib.auth.models import User
from .serializer import UserRegisterSerializer, UserLoginSerializer

class UserRegisterAPIView(APIView):
    permission_classes = [AllowAny]
    def post(self, request):
        serializer = UserRegisterSerializer(data=request.data)
        if serializer.is_valid():
            try:
                serializer.save()
                serializer_data = serializer.data
                user_id = serializer.instance.id
                serializer_data['user_id'] = user_id
            except NameyError as e:
                raise ValidationError("OOPS")
            return Response(serializer_data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class UserLoginAPIView(APIView):
    permission_classes = [AllowAny]

    def post(self, request):
        serializer = UserLoginSerializer(data=request.data)
        if serializer.is_valid():
            username = serializer.validated_data['username']
            password = serializer.validated_data['password']
            user = authenticate(username=username, password=password)
            if user:
                user_id = user.id
                response = {
                    "email":user.email,
                    "message":"Login Sucessful",
                    "username":username,
                    "user_id" : user_id,
                }
                return Response(response, status=status.HTTP_200_OK)
            else:
                return Response("Invalid username or password", status=status.HTTP_401_UNAUTHORIZED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)