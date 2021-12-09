from django.db import models
# from django.contrib.auth.models import User


class Item(models.Model):
    title = models.CharField(max_length=120)
    make = models.CharField(max_length=100)
    retail_price = models.DecimalField(decimal_places=2, max_digits=9)
    description = models.TextField()
    image = models.URLField(null=True, blank=True)
    owner = models.ForeignKey("jwt_auth.User", on_delete=models.CASCADE)
    try_it_charge = models.DecimalField(decimal_places=2, max_digits=9)
    location = models.CharField(max_length=120)
    
    def __str__(self):
        return self.title
