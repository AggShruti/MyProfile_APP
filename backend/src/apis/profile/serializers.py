from rest_framework import serializers

from apis.models import Profiles


class ProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = Profiles
        fields = ('title', 'content')
