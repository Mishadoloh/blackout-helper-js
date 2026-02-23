from rest_framework import generics, status
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from drf_spectacular.utils import extend_schema
from rest_framework.permissions import IsAuthenticated


from .models import User
from .serializers import UserSerializer, LogoutSerializer

@extend_schema(summary="Register a new user", description="Create a new user account.")
class SignUpView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer

class CustomTokenObtainPairSerializer(TokenObtainPairSerializer):
    username_field = "email"

@extend_schema(summary="User login", description="Obtain JWT access and refresh tokens.")
class LoginView(TokenObtainPairView):
    serializer_class = CustomTokenObtainPairSerializer

@extend_schema(summary="Get current user", description="Retrieve authenticated user profile.")
class UserDetailView(generics.RetrieveAPIView):
    serializer_class = UserSerializer
    permission_classes = [IsAuthenticated]

    def get_object(self):
        return self.request.user

@extend_schema(summary="Logout user", description="Blacklist refresh token to logout.")    
class LogoutView(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request):
        serializer = LogoutSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(
            {"detail": "Successfully logged out"},
            status=status.HTTP_205_RESET_CONTENT
        )


@extend_schema(summary="Get user by ID", description="Retrieve user by ID (auth required).")
class UserByIdView(generics.RetrieveAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [IsAuthenticated]