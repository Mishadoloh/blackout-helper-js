from rest_framework import generics, filters
from rest_framework.permissions import IsAuthenticatedOrReadOnly
from drf_spectacular.utils import extend_schema
from django_filters.rest_framework import DjangoFilterBackend
from .models import Recipes, Ingredients
from .serializers import RecipeSerializer, IngredientSerializer

@extend_schema(
    summary="List recipes",
    description="Retrieve recipes with filtering and search options."
)
class RecipeListView(generics.ListAPIView):
    queryset = Recipes.objects.all()
    serializer_class = RecipeSerializer
    permission_classes = [IsAuthenticatedOrReadOnly]
    filter_backends = [DjangoFilterBackend, filters.SearchFilter]
    filterset_fields = ["category", "type_of_dish", "complexity"]
    search_fields = ["title", "description"]

@extend_schema(
    summary="Recipe details",
    description="Retrieve recipe details and increment view count."
)
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

@extend_schema(
    summary="List ingredients",
    description="Retrieve ingredients for a specific recipe or all ingredients."
)
class IngredientListView(generics.ListAPIView):
    serializer_class = IngredientSerializer

    def get_queryset(self):
        recipe_id = self.kwargs.get("recipe_pk")
        if recipe_id:
            return Ingredients.objects.filter(recipe_id=recipe_id)
        return Ingredients.objects.all()