from django.core.mail import send_mail
from django.conf import settings
from users.models.custom_user import User
import random

def send_otp (email):
    subject = "Your account verification email"
    otp = random.randint(1000,9999)
    message = f"Welcome to InvestEase, your OTP is {otp}"
    from_email = settings.EMAIL_HOST_USER
    recipient_list = [email]
    user = User.objects.get(
        email = email
    )
    user.otp = otp
    user.save()
    
    send_mail(subject, message, from_email, recipient_list)

    return None