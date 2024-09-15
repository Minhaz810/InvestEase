from rest_framework import serializers
from rest_framework.validators import UniqueValidator
from django.contrib.auth.models import Group
from users.models.custom_user import CustomUser
from users.validators.email import validate_email
from users.validators.password import validate_password


class UserRegistrationSerializer(serializers.Serializer):
    name = serializers.CharField(required = True,
                                 error_messages = {
                                     'required':'Name is Required!',
                                     'blank':'Name Can Not Be Blank!'
                                 })
    email    = serializers.EmailField(required = True,
                                      validators = [
                                          UniqueValidator(
                                          queryset = CustomUser.objects.all(),
                                          message = "This email is already registered!"
                                          )
                                        ],
                                      error_messages={
                                        'required': 'Email is required.',
                                        'invalid': 'Please enter a valid email address.',
                                    })
    password_1 = serializers.CharField(write_only = True, required = True)
    password_2 = serializers.CharField(write_only = True, required = True)

    def validate_email(self,value):
        if value.strip()!='':
            validate_email(value)
        return value
    
    def validate_password_1(self,value):
        if value.strip()!='':
            validate_password(value)
        return value
    
    def validate_password_2(self,value):
        if value.strip()!='':
            validate_password(value)
        return value
    
    def validate(self, attrs):
        if attrs['password_1'] != attrs['password_2']:
            raise serializers.ValidationError({"password": "Password fields didn't match."})
        return attrs
    
    def create(self, validated_data):
        username = validated_data['name']
        email     = validated_data['email']
        password  = validated_data['password_1']

        user = CustomUser.objects.create(
            name=username,
            email=email
            )
        
        user.set_password(password)
        group= Group.objects.get(name='Website Users')
        user.groups.add(group)
        user.save()

        return user

    
    