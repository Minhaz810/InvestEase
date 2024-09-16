from rest_framework import serializers
from users.models.custom_user import User


class OTPResendSerializer(serializers.Serializer):
    email = serializers.EmailField(required = True)
    
    def validate_email(self,value):
        try:
            user = User.objects.get(email = value) 
        except User.DoesNotExist:
            raise serializers.ValidationError("User with this email does not exist")
        return value
