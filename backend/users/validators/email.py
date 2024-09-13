from django.core.exceptions import ValidationError
import re


def validate_email(value):
    email_regex = re.compile(r'^[\w\.-]+@[\w\.-]+\.\w+$')
    if not email_regex.match(value):
        raise ValidationError("Please Provide Valid Email Address")