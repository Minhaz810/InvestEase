from django.core.exceptions import ValidationError
import re

def validate_password(value):
    if (not re.search(r'[A-Z]', value) or
        not re.search(r'[a-z]', value) or
        not re.search(r'\d', value) or
        not re.search(r'[!@#$%^&*(),.?":{}|<>]', value)):
        raise ValidationError("Password must contain at least one uppercase letter, one lowercase letter, one number, and one symbol.")
