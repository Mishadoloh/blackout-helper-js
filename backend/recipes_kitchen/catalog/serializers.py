from rest_framework import serializers
from .models import Recipes, Ingredients

class IngredientSerializer(serializers.ModelSerializer):
    class Meta:
        model = Ingredients
        fields = ["id", "name", "quantity", "unit"]

class RecipeSerializer(serializers.ModelSerializer):
    ingredients = IngredientSerializer(many=True, read_only=True)

    class Meta:
        model = Recipes
        fields = [
            "id",
            "title",
            "description",
            "image_url",
            "category",
            "type_of_dish",
            "cooking_time",
            "complexity",
            "view_count",
            "instructions",
            "ingredients",
        ]
        read_only_fields = ["id", "view_count"]