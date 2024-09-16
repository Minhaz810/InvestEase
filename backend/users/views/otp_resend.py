from rest_framework.views import APIView
from rest_framework.response import Response
from users.serializers.otp_resend import OTPResendSerializer
from rest_framework import status
from users.utils.email import send_otp

class OTPResend(APIView):
    def post(self,request):
        data = request.data
        serializer = OTPResendSerializer(data = data)

        if serializer.is_valid():
            email = serializer.validated_data.get('email')
            
            otp_status = send_otp(email)
            
            if otp_status == "Check Email For OTP":
                return Response(
                    {
                        "message": "OTP has been resent",
                        "email": email
                    },
                    status = status.HTTP_200_OK
                )
            else:
                return Response(
                    {
                        "message": "Something went wrong, Please Try Again",
                        "email": email
                    },
                    status = status.HTTP_200_OK
                )

        error = next(iter(serializer.errors.values()))[0]

        return Response({
            "error": str(error)
        }, status=status.HTTP_400_BAD_REQUEST)