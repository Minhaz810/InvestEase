from typing import Any, Dict
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework.exceptions import AuthenticationFailed

class CustomTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)
        token['name'] = user.name
        return token
    
    def validate(self, attrs):
        try:
            data = super().validate(attrs)
            data
        except:
            raise AuthenticationFailed(detail="Invalid Credentials",code="authorization") 
        return data