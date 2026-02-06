from django.urls import path
from .views import RecipeListView, RecipeDetailView, IngredientListView

app_name = "catalog"


urlpatterns = [
    path("recipes/", RecipeListView.as_view(), name="recipe-list"),
    path("recipes/<int:pk>/", RecipeDetailView.as_view(), name="recipe-detail"),
    path("ingredients/", IngredientListView.as_view(), name="ingredient-list"),
    path("recipes/<int:recipe_pk>/ingredients/", IngredientListView.as_view(), name="recipe-ingredients"),
]