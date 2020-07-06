from django.urls import path

from .views import PortfolioListView, PortfolioDetailView

urlpatterns = [
    path('', PortfolioListView.as_view()),
    path('<pk>', PortfolioDetailView.as_view()),
]
