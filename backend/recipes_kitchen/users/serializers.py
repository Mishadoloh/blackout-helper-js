from rest_framework import serializers
from models import Users

class UserSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True,required=True, style={"input_type": "password"}
)
    class Meta:
        model = Users
        fields = ["id", "email", "password", "full_name", "created_at"]
        read_only_fields = ["id", "created_at"]
    
    def create(self, validated_data):
        password = validated_data.pop("password")
        user = Users(**validated_data)
        user.set_password(password)
        user.save()
        return user