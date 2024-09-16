from rest_framework import status
from rest_framework.test import APITestCase
from django.contrib.auth.models import Group
from users.models.custom_user import User
from django.urls import reverse

class UserOTPVerificationTestCase(APITestCase):
    def setUp(self):
        self.url = reverse('user_verification')
        Group.objects.create(name='Website Users')

        User.objects.create_user(
            username='johndoe',
            email='johndoe@example.com',
            password='StrongPassword123!',
            otp='123456'
        )

        self.valid_payload = {
            "email": "johndoe@example.com",
            "otp": "123456"
        }

        self.invalid_payload_email_missing = {
            "otp": "123456"
        }

        self.invalid_payload_otp_missing = {
            "email": "johndoe@example.com",
        }
        
        self.invalid_payload_user_does_not_exist = {
            "email": "johndoe@nonexistent.com",
            "otp": "123456"
        }

        self.invalid_payload_otp_more_than_6 = {
            "email": "johndoe@example.com",
            "otp": "1234567"
        }

        self.invalid_payload_otp_less_than_6 = {
            "email": "johndoe@example.com",
            "otp": "12345"
        }

        self.invalid_payload_otp_mismatch = {
            "email": "johndoe@example.com",
            "otp": "654321"
        }

        self.invalid_payload_email_blank = {
            "email": "",
            "otp": "123456"
        }

        self.invalid_payload_otp_blank = {
            "email": "johndoe@example.com",
            "otp": ""
        }

    def test_otp_verification_success(self):
        response = self.client.post(self.url, self.valid_payload, format='json')
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertIn('verification successful', str(response.data))

    def test_otp_verification_missing_email(self):
        response = self.client.post(self.url, self.invalid_payload_email_missing, format='json')
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)
        self.assertIn('This field is required.', str(response.data))

    def test_otp_verification_missing_otp(self):
        response = self.client.post(self.url, self.invalid_payload_otp_missing, format='json')
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)
        self.assertIn('This field is required.', str(response.data))

    def test_otp_verification_user_does_not_exist(self):
        response = self.client.post(self.url, self.invalid_payload_user_does_not_exist, format='json')
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)
        self.assertIn('User with this email does not exist', str(response.data))

    def test_otp_verification_otp_more_than_6_digits(self):
        response = self.client.post(self.url, self.invalid_payload_otp_more_than_6, format='json')
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)
        self.assertIn('OTP must have 6 characters.', str(response.data))

    def test_otp_verification_otp_less_than_6_digits(self):
        response = self.client.post(self.url, self.invalid_payload_otp_less_than_6, format='json')
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)
        self.assertIn('OTP must have 6 characters.', str(response.data))

    def test_otp_verification_otp_mismatch(self):
        response = self.client.post(self.url, self.invalid_payload_otp_mismatch, format='json')
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)
        self.assertIn('Incorrect OTP', str(response.data))

    def test_otp_verification_email_blank(self):
        response = self.client.post(self.url, self.invalid_payload_email_blank, format='json')
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)
        self.assertIn('This field may not be blank.', str(response.data))

    def test_otp_verification_otp_blank(self):
        response = self.client.post(self.url, self.invalid_payload_otp_blank, format='json')
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)
        self.assertIn('This field may not be blank.', str(response.data))
