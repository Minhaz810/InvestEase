from users.serializers.cutstom_token import MyTokenObtainPairSerializer
from rest_framework_simplejwt.views import (
    TokenObtainPairView
)

class CustomTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer