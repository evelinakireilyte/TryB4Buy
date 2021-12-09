from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.exceptions import PermissionDenied
from django.contrib.auth import get_user_model
from datetime import datetime, timedelta
from django.conf import settings
import jwt
from jwt_auth.serializers import UserSerializer

User = get_user_model()
from .models import User
from rest_framework.permissions import IsAuthenticatedOrReadOnly
from .serializers import PopulatedUserProfileSerializer
from django.core import serializers
from items.serializers import ItemSerializer



class RegisterView(APIView):

    def post(self, request):
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({'message': 'Registration successful'}, status=status.HTTP_202_ACCEPTED)

        return Response(serializer.errors, status=status.HTTP_422_UNPROCESSABLE_ENTITY)


class LoginView(APIView):

    def post(self, request):

        email = request.data.get('email')
        password = request.data.get('password')

        try:
            user_to_login = User.objects.get(email=email)
        except User.DoesNotExist:
            raise PermissionDenied({'message': 'Invalid credentials'})

        if not user_to_login.check_password(password):
            raise PermissionDenied({'message': 'Invalid credentials'})

        dt = datetime.now() + timedelta(days = 7)

        token = jwt.encode(
            {'sub': user_to_login.id, 'exp': int(dt.strftime('%s'))}, settings.SECRET_KEY, algorithm='HS256')
        return Response({'token': token, 'message': f'Welcome back {user_to_login.username}!,', 'id': user_to_login.id})

class UserProfileView(APIView):
    permission_classes = (IsAuthenticatedOrReadOnly,)
    def get(self, request, pk):
        user_profile = User.objects.get(id=pk)
        serialized = PopulatedUserProfileSerializer(user_profile)
        return Response(serialized.data, status=status.HTTP_200_OK)