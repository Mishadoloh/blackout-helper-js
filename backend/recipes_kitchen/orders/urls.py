from django.urls import path
from .views import OrderListView, OrderCreateView

app_name = "orders"


urlpatterns = [
    path("orders/", OrderListView.as_view()),
    path("orders/create/", OrderCreateView.as_view()),
]