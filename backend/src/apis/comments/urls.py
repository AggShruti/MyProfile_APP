from django.urls import path

from .views import CommentListView,CommentCreateView

urlpatterns = [
    path('', CommentListView.as_view()),
    path('create/', CommentCreateView.as_view())
]
