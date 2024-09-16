from django.test import TestCase
from django.urls import reverse
from rest_framework import status
from rest_framework.test import APITestCase
from django.core import mail
from django.contrib.auth.models import Group
from users.models.custom_user import User


class UserRegistrationTestCase(APITestCase):
    def setUp(self):
        self.url = reverse('user_registration')
        Group.objects.create(name='Website Users')

        User.objects.create_user(
            username='johndoe', 
            email='johndoe123@example.com', 
            password='StrongPassword123!'
        )

        self.valid_payload = {
            "name": "John Doe",
            "email": "johndoe@example.com",
            "password_1": "StrongPassword123!",
            "password_2": "StrongPassword123!"
        }
        self.invalid_payload_existing_email = {
            "name": "John Doe",
            "email": "johndoe123@example.com", 
            "password_1": "StrongPassword123!",
            "password_2": "StrongPassword123!"
        }
        self.invalid_payload_missing_name = {
            "name": "",
            "email": "johndoe@example.com",
            "password_1": "StrongPassword123!",
            "password_2": "StrongPassword123!"
        }

        self.invalid_payload_invalid_email = {
            "name": "John Doe",
            "email": "invalidemail",
            "password_1": "StrongPassword123!",
            "password_2": "StrongPassword123!"
        }

        self.invalid_payload_password_mismatch = {
            "name": "John Doe",
            "email": "johndoe@example.com",
            "password_1": "StrongPassword123!",
            "password_2": "DifferentPassword456!"
        }

        self.invalid_payload_missing_uppercase = {
            "name": "John Doe",
            "email": "johndoe@example.com",
            "password_1": "strongpassword123!",
            "password_2": "strongpassword123!"
        }

        self.invalid_payload_missing_lowercase = {
            "name": "John Doe",
            "email": "johndoe@example.com",
            "password_1": "STRONGPASSWORD123!",
            "password_2": "STRONGPASSWORD123!"
        }

        self.invalid_payload_missing_number = {
            "name": "John Doe",
            "email": "johndoe@example.com",
            "password_1": "StrongPassword!",
            "password_2": "StrongPassword!"
        }

        self.invalid_payload_missing_symbol = {
            "name": "John Doe",
            "email": "johndoe@example.com",
            "password_1": "StrongPassword123",
            "password_2": "StrongPassword123"
        }

    def test_user_registration_success(self):
        response = self.client.post(self.url, self.valid_payload, format='json')
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
    
    def test_user_registration_failure_missing_name(self):
        response = self.client.post(self.url, self.invalid_payload_missing_name, format='json')
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)

    def test_user_registration_failure_invalid_email(self):
        response = self.client.post(self.url, self.invalid_payload_invalid_email, format='json')
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)

    def test_user_registration_failure_password_mismatch(self):
        response = self.client.post(self.url, self.invalid_payload_password_mismatch, format='json')
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)

    def test_user_registration_failure_existing_email(self):
        response = self.client.post(self.url, self.invalid_payload_existing_email, format='json')
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)

    def test_user_registration_failure_missing_uppercase(self):
        response = self.client.post(self.url, self.invalid_payload_missing_uppercase, format='json')
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)
        self.assertIn('Password must contain at least one uppercase letter, one lowercase letter, one number, and one symbol', str(response.data))

    def test_user_registration_failure_missing_lowercase(self):
        response = self.client.post(self.url, self.invalid_payload_missing_lowercase, format='json')
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)
        self.assertIn('Password must contain at least one uppercase letter, one lowercase letter, one number, and one symbol.', str(response.data))

    def test_user_registration_failure_missing_number(self):
        response = self.client.post(self.url, self.invalid_payload_missing_number, format='json')
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)
        self.assertIn('Password must contain at least one uppercase letter, one lowercase letter, one number, and one symbol.', str(response.data))

    def test_user_registration_failure_missing_symbol(self):
        response = self.client.post(self.url, self.invalid_payload_missing_symbol, format='json')
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)
        self.assertIn('Password must contain at least one uppercase letter, one lowercase letter, one number, and one symbol.', str(response.data))
