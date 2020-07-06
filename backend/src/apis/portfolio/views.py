from rest_framework.generics import ListAPIView, RetrieveAPIView
from apis.models import Portfolio
from .serializers import PortfolioSerializer


class PortfolioListView(ListAPIView):
    queryset = Portfolio.objects.all()
    serializer_class = PortfolioSerializer


class PortfolioDetailView(RetrieveAPIView):
    queryset = Portfolio.objects.all()
    serializer_class = PortfolioSerializer
