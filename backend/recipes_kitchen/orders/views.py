from rest_framework import generics
from rest_framework.permissions import IsAuthenticated
from drf_spectacular.utils import extend_schema
from .models import Orders
from .serializers import OrderSerializer


@extend_schema(
    summary="List user orders",
    description="Retrieve all orders created by the authenticated user."
)
class OrderListView(generics.ListAPIView):
    serializer_class = OrderSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        return Orders.objects.filter(user_id=self.request.user)

@extend_schema(
    summary="Create order",
    description="Create a new order for the authenticated user."
)
class OrderCreateView(generics.CreateAPIView):
    serializer_class = OrderSerializer
    permission_classes = [IsAuthenticated]

    def perform_create(self, serializer):
        serializer.save(user_id=self.request.user)