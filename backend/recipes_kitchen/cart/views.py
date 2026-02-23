from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from drf_spectacular.utils import extend_schema
from catalog.models import Recipes
from .models import Cart, CartItem
from .serializers import CartItemSerializer

@extend_schema(
    summary="Add recipe to cart",
    description="Add all ingredients of a recipe to the user's cart."
)
class AddRecipeToCartView(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request, recipe_id):
        recipe = Recipes.objects.get(id=recipe_id)
        cart, _ = Cart.objects.get_or_create(user=request.user)

        created_count = 0

        for ingredient in recipe.ingredients.all():
            _, created = CartItem.objects.get_or_create(
                cart=cart,
                ingredient=ingredient,
                defaults={"recipe": recipe}
            )
            if created:
                created_count += 1

        return Response({
            "detail": "Ingredients added to cart",
            "added_items": created_count
        })



@extend_schema(
    summary="View cart",
    description="Retrieve all items in the authenticated user's cart."
)
class CartView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        cart, _ = Cart.objects.get_or_create(user=request.user)
        serializer = CartItemSerializer(cart.items.all(), many=True)
        return Response(serializer.data)