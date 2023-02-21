from rest_framework import serializers
from django.contrib.auth import get_user_model
# User = get_user_model()
from account.models import User
from . models import App, AppAdded
from django.contrib.auth import authenticate
from django.utils.translation import gettext_lazy as _
from rest_framework import serializers


class AuthTokenSerializer(serializers.Serializer):
    """ Overriding the tokens AuthTokenSerializer to use email instead of username """
    email = serializers.CharField(
        label=_("email"),
        write_only=True
    )
    password = serializers.CharField(
        label=_("Password"),
        style={'input_type': 'password'},
        trim_whitespace=False,
        write_only=True
    )
    token = serializers.CharField(
        label=_("Token"),
        read_only=True
    )

    def validate(self, attrs):
        email = attrs.get('email')
        password = attrs.get('password')

        if email and password:
            user = authenticate(request=self.context.get('request'),
                                email=email, password=password)
            print(user,"user")
            # The authenticate call simply returns None for is_active=False
            # users. (Assuming the default ModelBackend authentication
            # backend.)
            if not user:
                msg = _('Unable to log in with provided credentials.')
                raise serializers.ValidationError(msg, code='authorization')
        else:
            msg = _('Must include "email" and "password".')
            raise serializers.ValidationError(msg, code='authorization')

        attrs['user'] = user
        return attrs


class RegistrationSerializer(serializers.ModelSerializer):
    """User Registration Serializer"""
    class Meta:
        model = User
        fields = ["email", "first_name", "last_name", "password"]
    def create(self,validated_data):
        user = User.objects.create(**validated_data)
        user.set_password(validated_data["password"])
        user.save()
        return user
        

class AppSerializer(serializers.ModelSerializer):
    """App Serializer"""
    class Meta:
        model = App
        fields = "__all__"
        extra_kwargs = {'creator': {'required': False}}


class AppAddedSerializer(serializers.ModelSerializer):
    class Meta:
        model = AppAdded
        fields = "__all__"
