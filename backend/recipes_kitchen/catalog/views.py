from rest_framework import generics, filters
from rest_framework.permissions import IsAuthenticatedOrReadOnly
from django_filters.rest_framework import DjangoFilterBackend
from .models import Recipes, Ingredients
from .serializers import RecipeSerializer, IngredientSerializer

class RecipeListView(generics.ListAPIView):
    queryset = Recipes.objects.all()
    serializer_class = RecipeSerializer
    permission_classes = [IsAuthenticatedOrReadOnly]
    filter_backends = [DjangoFilterBackend, filters.SearchFilter]
    filterset_fields = ["category", "type_of_dish", "complexity"]
    search_fields = ["title", "description"]

class RecipeDetailView(generics.RetrieveAPIView):
    queryset = Recipes.objects.all()
    serializer_class = RecipeSerializer
    permission_classes = [IsAuthenticatedOrReadOnly]

    def get_queryset(self):
        queryset = super().get_queryset()
        recipe = queryset.filter(pk=self.kwargs["pk"]).first()
        if recipe:
            recipe.view_count += 1
            recipe.save()
        return queryset

class IngredientListView(generics.ListAPIView):
    serializer_class = IngredientSerializer

    def get_queryset(self):
        recipe_id = self.kwargs.get("recipe_pk")
        if recipe_id:
            return Ingredients.objects.filter(recipe_id=recipe_id)
        return Ingredients.objects.all()