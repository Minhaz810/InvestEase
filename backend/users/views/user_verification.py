from rest_framework.views import APIView
from rest_framework import status
from rest_framework.response import Response
from users.serializers.user_verification import UserVerificationSerializer
from users.models.custom_user import User
from django.utils import timezone

class UserVerification(APIView):
    def post(self, request):
        data = request.data
        serializer = UserVerificationSerializer(data = data)

        if serializer.is_valid():
            email = serializer.validated_data.get('email')
            otp   = serializer.validated_data.get('otp')
            user = User.objects.get(email = email)

            if not user.otp == otp:
                return Response(
                    {
                        "error":"Incorrect OTP"
                    },
                    status = status.HTTP_400_BAD_REQUEST
                )
            elif timezone.now()>user.otp_expiry:
                return Response(
                    {
                        "error":"This otp has been expired"
                    },
                    status = status.HTTP_400_BAD_REQUEST
                )
            else:
                user.is_email_verified = True
                user.save()
            
                return Response(
                    {
                        "message":"verification successful"
                    },
                    status = status.HTTP_200_OK
                )
        
        error = next(iter(serializer.errors.values()))[0]

        return Response(
            {
                "error":str(error)
            },
            status= status.HTTP_400_BAD_REQUEST
        )
        