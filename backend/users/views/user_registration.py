from rest_framework.views import APIView
from rest_framework.response import Response
from users.serializers.user_registration import UserRegistrationSerializer
from rest_framework import status
from users.models.custom_user import User
from django.db import transaction
from users.utils.email import send_otp

class UserRegistration(APIView):
    def post(self,request):
        data = request.data
        serializer = UserRegistrationSerializer(data = data)
       
        with transaction.atomic():
            if serializer.is_valid():
                serializer.save()
                name = serializer.validated_data.get('name')
                email = serializer.validated_data.get('email')
                otp_status = send_otp(email)
                if otp_status == "Check Email For OTP":

                    return Response(
                        {
                            "message": "User Creation Succesful. Check Email For OTP",
                            "name": name,
                            "email": email
                        },
                        status = status.HTTP_201_CREATED
                    )
                else:
                    return Response(
                        {
                            "message": "Something went wrong, Please Try Again",
                            "email": email
                        },
                        status = status.HTTP_500_INTERNAL_SERVER_ERROR
                    )
                
            error = next(iter(serializer.errors.values()))[0]

            return Response({
                "error": str(error)
            }, status=status.HTTP_400_BAD_REQUEST)
        