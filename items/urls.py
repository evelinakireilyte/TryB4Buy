from django.urls import path
from . import views
from .views import ItemListView
from .views import ItemDetailView

urlpatterns = [
    path('home/', views.home),
    path('about/', views.about),
    path('detail/<int:pk>/', ItemDetailView.as_view()),
    path('all/', ItemListView.as_view()),
]
