from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework import status
from .models import Favorite
from catalog.models import Recipes

class FavoriteToggleView(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request, recipe_id):
        recipe = Recipes.objects.get(id=recipe_id)

        favorite = Favorite.objects.filter(
            user=request.user,
            recipe=recipe
        )

        if favorite.exists():
            favorite.delete()
            return Response(
                {"detail": "Removed from favorites"},
                status=status.HTTP_200_OK
            )
        
        
        Favorite.objects.create(user=request.user, recipe=recipe)
        
        return Response(
            {"detail": "Added to favorites"},
            status=status.HTTP_201_CREATED
        )