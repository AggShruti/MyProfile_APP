from django.urls import path

from .views import PortfolioListView, PortfolioDetailView
# To get portfolio using primary key and additional path for getting list of all portfolios , which is never used
urlpatterns = [
    path('', PortfolioListView.as_view()),
    path('<pk>', PortfolioDetailView.as_view()),
]
