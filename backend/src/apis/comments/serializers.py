from rest_framework import serializers

from apis.models import Comments

class CommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comments
        fields = ('email','content','timeStamp')
