from django.urls import path
from .views import ReviewListView
from .views import ReviewDetailView

urlpatterns = [
    # wildcard: we specify that the route can match /5 or /6
    path('<int:pk>/', ReviewDetailView.as_view()),
    path('all/', ReviewListView.as_view()),
]
