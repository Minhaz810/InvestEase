from rest_framework import status
from rest_framework.test import APITestCase
from django.urls import reverse
from users.models.custom_user import User
from unittest.mock import patch

class OTPResendTestCase(APITestCase):
    def setUp(self):
        self.url = reverse('otp_resend')  # Adjust the URL name as per your configuration

        # Create a test user
        User.objects.create_user(
            username='johndoe',
            email='johndoe@example.com',
            password='StrongPassword123!',
        )
        
        self.valid_payload = {
            "email": "johndoe@example.com"
        }

        self.invalid_payload_email_missing = {
        }

        self.invalid_payload_user_does_not_exist = {
            "email": "nonexistent@example.com"
        }

        self.invalid_payload_email_blank = {
            "email": ""
        }
        

    def test_resend_otp_missing_email(self):
        response = self.client.post(self.url, self.invalid_payload_email_missing, format='json')
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)
        self.assertIn('This field is required.', str(response.data))

    def test_resend_otp_user_does_not_exist(self):
        response = self.client.post(self.url, self.invalid_payload_user_does_not_exist, format='json')
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)
        self.assertIn('User with this email does not exist', str(response.data))

    def test_resend_otp_email_blank(self):
        response = self.client.post(self.url, self.invalid_payload_email_blank, format='json')
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)
        self.assertIn('This field may not be blank.', str(response.data))

