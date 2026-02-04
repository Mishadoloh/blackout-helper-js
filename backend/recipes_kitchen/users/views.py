from rest_framework import generics, status
from rest_framework.response import Response
from django.contrib.auth import login
from .models import User
from .serializers import UserSerializer, LoginSerializer


class SignUpView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer

class LoginView(generics.GenericAPIView):
    serializer_class = LoginSerializer
    
    def post(self, request):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)

        user = serializer.validated_data["user"]
        login(request, user) 

        return Response(
            {
                "message": "You are Welcome",
                "user_id": user.id,
                "email": user.email,
            },
            status=status.HTTP_200_OK
        ) 