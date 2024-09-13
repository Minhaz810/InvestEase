from rest_framework.views import APIView
from rest_framework.response import Response
from users.serializers.user_registration import UserRegistrationSerializer
from rest_framework import status

class UserRegistration(APIView):
    def post(self,request):
        data = request.data

        serializer = UserRegistrationSerializer(data = data)

        if serializer.is_valid():
            serializer.save()
            name = serializer.validated_data.get('name')
            email = serializer.validated_data.get('email')
            return Response(
                {
                    "message": "User Creation Succesful",
                    "name": name,
                    "email": email
                },
                status = status.HTTP_201_CREATED
            )
        
        error = next(iter(serializer.errors.values()))[0]


        return Response({
            "error": str(error)
        }, status=status.HTTP_400_BAD_REQUEST)