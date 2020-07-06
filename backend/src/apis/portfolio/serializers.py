from rest_framework import serializers

from apis.models import Portfolio


class PortfolioSerializer(serializers.ModelSerializer):
    class Meta:
        model = Portfolio
        fields = ('name', 'education_qualification','experiences','tech_stack')