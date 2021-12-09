# from django.shortcuts import render
# from django.http import HttpResponse
# from rest_framework.views import APIView
# from rest_framework.response import Response
# from rest_framework import status
# from user_profile.serializers import PopulatedUserProfileSerializer
# from .models import UserProfile
# from rest_framework.permissions import IsAuthenticatedOrReadOnly


# class UserProfileView(APIView):
#     permission_classes = (IsAuthenticatedOrReadOnly,)
#     def get(self, request, pk):
#         user_profile = UserProfile.objects.get(id=pk)
#         serialized = PopulatedUserProfileSerializer(user_profile)
#         return Response(serialized.data, status=status.HTTP_200_OK)