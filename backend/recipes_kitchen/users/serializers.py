from django.contrib.auth import authenticate
from rest_framework import serializers
from .models import User

class UserSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True,required=True, min_length=6, style={"input_type": "password"}
)
    class Meta:
        model = User
        fields = ["id", "email", "password", "full_name", "created_at"]
        read_only_fields = ["id", "created_at"]
    
    def create(self, validated_data):
        password = validated_data.pop("password")
        user = User(**validated_data)
        user.set_password(password)
        user.save()
        return user

class LoginSerializer(serializers.Serializer):
    email = serializers.EmailField()
    password = serializers.CharField(
        write_only=True,
        min_length=6,
        style={"input_type": "password"}
    )
    def validate(self, attrs):
        user = authenticate(
            email=attrs["email"],
            password=attrs["password"]
        )
        if not user:
            raise serializers.ValidationError(
                "Incorrect password"
            )

        attrs["user"] = user
        return attrs