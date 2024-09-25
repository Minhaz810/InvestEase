from django.core.mail import send_mail
from django.conf import settings
from users.models.custom_user import User
from django.utils import timezone
from datetime import timedelta
import random

def send_otp (email):
    try:
        subject = "Your account verification email"
        otp = random.randint(100000,999999)
        message = f"Welcome to InvestEase, your OTP is {otp}"
        from_email = settings.EMAIL_HOST_USER
        recipient_list = [email]
        user = User.objects.get(
            email = email
        )
        user.otp = otp
        user.otp_expiry = timezone.now() + timedelta(minutes=5)
        user.save()

        send_mail(subject, message, from_email, recipient_list)

        return "Check Email For OTP"
    except:
        return "Sorry something went wrong"
    

    