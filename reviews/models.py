from django.db import models

# Create your models here.


class Review(models.Model):
    text = models.TextField(max_length=300)
    item = models.ForeignKey("items.Item", related_name="reviews", on_delete=models.CASCADE)
    owner = models.ForeignKey("jwt_auth.User", on_delete=models.CASCADE)

    def __str__(self):
        return f"Review: {self.text}"
