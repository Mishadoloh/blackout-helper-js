from django.db import models
from catalog.models import Recipes
from users.models import Users

class Orders(models.Model):
    user_id = models.ForeignKey(Users, on_delete=models.CASCADE)
    recipe_id = models.ForeignKey(Recipes, on_delete=models.CASCADE)
    created_at = models.DateTimeField()