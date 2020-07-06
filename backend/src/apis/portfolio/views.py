from rest_framework.generics import ListAPIView, RetrieveAPIView
from apis.models import Portfolio
from .serializers import PortfolioSerializer

#Get list of portfolios
class PortfolioListView(ListAPIView):
    queryset = Portfolio.objects.all()
    serializer_class = PortfolioSerializer

# Get single portfolio
class PortfolioDetailView(RetrieveAPIView):
    queryset = Portfolio.objects.all()
    serializer_class = PortfolioSerializer
