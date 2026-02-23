from django.urls import path
from .views import FavoriteToggleView

app_name = "favorites"

urlpatterns = [
    path("<int:recipe_id>/toggle/", FavoriteToggleView.as_view()),
]