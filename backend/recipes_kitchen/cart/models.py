from django.db import models
from users.models import User
from catalog.models import Recipes, Ingredients

class Cart(models.Model):
    user = models.OneToOneField(
        User,
        on_delete=models.CASCADE,
        related_name="cart"
    )

    def __str__(self):
        return f"Cart of {self.user.email}"

class CartItem(models.Model):
    cart = models.ForeignKey(
        Cart,
        on_delete=models.CASCADE,
        related_name="items"
    )

    recipe = models.ForeignKey(
        Recipes,
        on_delete=models.CASCADE
    )

    ingredient = models.ForeignKey(
        Ingredients,
        on_delete=models.CASCADE
    )
    class Meta:
        unique_together = ("cart", "ingredient")
