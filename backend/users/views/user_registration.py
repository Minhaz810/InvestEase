from rest_framework.views import APIView
from rest_framework.response import Response
from users.serializers.user_registration import UserRegistrationSerializer
from rest_framework import status

from django.core.mail import send_mail

class UserRegistration(APIView):
    def post(self,request):
        data = request.data
        serializer = UserRegistrationSerializer(data = data)

        if serializer.is_valid():
            serializer.save()
            name = serializer.validated_data.get('name')
            email = serializer.validated_data.get('email')

            """Mail sending"""

            subject = 'OTP Veification'
            message = 'Welcome to InvestEase, This is your OTP is 123456'
            from_email = 'minhazchowdhury810@gmail.com'
            recipient_list = [email]
            
            send_mail(subject, message, from_email, recipient_list)

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