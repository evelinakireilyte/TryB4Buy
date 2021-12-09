from rest_framework import serializers
from .models import Item
from reviews.serializers import PopulatedReviewSerializer
from jwt_auth.serializers import UserSerializer


class ItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = Item
        fields = '__all__'


class PopulatedItemSerializer(ItemSerializer):
    reviews = PopulatedReviewSerializer(many=True)
    owner = UserSerializer()
    