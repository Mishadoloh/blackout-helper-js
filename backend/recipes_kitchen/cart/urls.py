from django.urls import path
from .views import AddRecipeToCartView, CartView

app_name = "cart"


urlpatterns = [
    path("add-recipe/<int:recipe_id>/", AddRecipeToCartView.as_view(), name="add-recipe"),
    path("", CartView.as_view(), name="cart-detail"),
]
