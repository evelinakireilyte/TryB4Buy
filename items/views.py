from django.shortcuts import render
from django.http import HttpResponse
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import Item
from .serializers import ItemSerializer, PopulatedItemSerializer
from rest_framework.permissions import IsAuthenticatedOrReadOnly
from rest_framework.exceptions import PermissionDenied

# Define the home view


def home(request):
    list_of_items = Item.objects.all()
    print(list_of_items)
    return HttpResponse('<h1>Hello Items</h1>')


def about(request):
    return HttpResponse('<h1>About</h1>')


class ItemListView(APIView):
    permission_classes = (IsAuthenticatedOrReadOnly,)
    # responder to GET / all items
    def get(self, request):
        items = Item.objects.all()
        serialized_items = PopulatedItemSerializer(items, many=True)
        return Response(serialized_items.data, status=status.HTTP_200_OK)

    # post an item
    def post(self, request):
        request.data['owner'] = request.user.id
        item = ItemSerializer(data=request.data)
        print(item)
        print(item.__dict__)
        print(dir(item))
        if item.is_valid():
            item.save()
            return Response(item.data, status=status.HTTP_201_CREATED)
        else:
            return Response(item.errors, status=status.HTTP_422_UNPROCESSABLE_ENTITY)


class ItemDetailView(APIView):
    permission_classes = (IsAuthenticatedOrReadOnly,)
    # get a single item by id
    def get(self, request, pk):
        item = Item.objects.get(id=pk)
        serialized_item = PopulatedItemSerializer(item)
        return Response(serialized_item.data, status=status.HTTP_200_OK)

    # delete a single item

    def delete(self, request, pk):
        try:
            item = Item.objects.get(id=pk)
        except:
            return Response(status=status.HTTP_500_INTERNAL_SERVER_ERROR)
        if item.owner != request.user:
            raise PermissionDenied
        item.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

    # update an item

    def put(self, request, pk):
        item = Item.objects.get(id=pk)
        request.data['owner'] = request.user.id
        updated_item = ItemSerializer(item, data=request.data)
        if item.owner != request.user:
            raise PermissionDenied
        elif updated_item.is_valid():
            updated_item.save()
            return Response(updated_item.data, status=status.HTTP_202_ACCEPTED)
        else:
            return Response(updated_item.errors, status=status.HTTP_422_UNPROCESSABLE_ENTITY)
