from django.urls import path
from users.views.user_registration import UserRegistration

urlpatterns = [
    path('registration',view=UserRegistration.as_view())
]
