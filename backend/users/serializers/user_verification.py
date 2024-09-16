from rest_framework import serializers
from users.models.custom_user import User
from django.core.validators import MinLengthValidator,MaxLengthValidator

class UserVerificationSerializer(serializers.Serializer):
    email = serializers.EmailField(required = True)
    otp   = serializers.CharField(max_length = 6, required = True,
                                  validators=[MinLengthValidator(6,message="OTP must have 6 characters."), 
                                              MaxLengthValidator(6,message="OTP must have 6 characters.")],
                                 )
    
    def validate_email(self,value):
        try:
            user = User.objects.get(email = value) 
        except User.DoesNotExist:
            raise serializers.ValidationError("User with this email does not exist")
        return value
