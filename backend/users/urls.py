from django.urls import path
from users.views.user_registration import UserRegistration
from users.views.user_verification import UserVerification
from users.views.otp_resend import OTPResend


urlpatterns = [
    path('registration',view=UserRegistration.as_view(),name = 'user_registration'),
    path('verify-user',view = UserVerification.as_view(),name = 'user_verification' ),
    path('otp-resend',view = OTPResend.as_view(),name = 'otp_resend' ),
]
