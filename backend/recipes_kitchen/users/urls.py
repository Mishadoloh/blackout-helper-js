from django.urls import path
from .views import SignUpView, LoginView, UserDetailView, LogoutView, UserByIdView
from rest_framework_simplejwt.views import TokenRefreshView

app_name = "users"

urlpatterns = [
    path("signup/", SignUpView.as_view(), name="signup"),
    path("login/", LoginView.as_view(), name="login"),          
    path("refresh/", TokenRefreshView.as_view(), name="refresh"),
    path("me/", UserDetailView.as_view(), name="me"),
    path("<int:pk>/", UserByIdView.as_view(), name="user-detail"),
    path("logout/", LogoutView.as_view(), name="logout"),
]

